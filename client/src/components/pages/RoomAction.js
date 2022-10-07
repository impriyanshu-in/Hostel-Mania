import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createRoomAction, getRoomAction } from '../../actions/roomActions';
import axios from 'axios';
import ReactLoading from 'react-loading';

class RoomAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hostel: this.props.match.params.id,
            id: '',
            type: '',
            worker: '',
            time: '',
            gender: '',
            errors: {},
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async onDelete(_id) {
        await axios.delete(`/api/room/${_id}`).then(res => console.log(res)).catch(err => console.log(err));
        await this.props.getRoomAction(this.props.match.params.id);
    }
    async onSubmit(e) {
        e.preventDefault();
        console.log(this.props.match.params.id);
        const activityRecord = {
            type: this.state.type,
            worker: this.state.worker,
            hostel: this.state.hostel,
            id: this.state.id,
            gender: this.state.gender,
            time: this.state.time,
        }
        console.table(activityRecord);
        await this.props.createRoomAction(activityRecord);
        this.setState({
            worker: '',
            type: '',
            id: '',
            gender: '',
            time: '',
            errors: {}
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    async componentDidMount() {
        await this.props.getRoomAction(this.props.match.params.id);
    }
    render() {
        const { roomData, loading } = this.props.roomData;
        let tableContent;
        (!roomData.length || loading) ? (
            tableContent = null
        ) : tableContent = roomData.length ? roomData.map(
            el =>
                <tr key={el._id} >
                    <th scope="row">{roomData.indexOf(el) + 1}</th>
                    <td>{el.id ? el.id : "-"}</td>
                    <td>{el.type ? el.type : "-"}</td>
                    <td>{el.time ? el.time : "-"}</td>
                    <td>{el.worker ? el.worker : "-"}</td>
                    {/* <td>{el.gender ? el.gender : "-"}</td> */}
                    <td style={{ cursor: 'pointer', color: '#00a4eb' }}
                        onClick=
                        {() => this.onDelete(el._id)}
                    >
                        Click Here
                    </td>
                </tr>
        ) : null
        const { errors } = this.state;

        const blockToHostel = (hostel) =>{
             /* eslint-disable */
            if(hostel == "BH 1") return "Aravali (BH 1)"
            if(hostel == "BH 2") return "Nilgiri (BH 2)"
            if(hostel == "BH 3") return "Shivalik (BH 3)"
            if(hostel == "GH") return "Gangotri (GH)"
             /* eslint-enable */
        }

        return (
            <div className="mid container">
                <h1>{blockToHostel(this.state.hostel)}</h1>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="id">Room No.</label>
                            <input type="text" id="id" placeholder="Room No."
                                className={classnames("form-control", {
                                    "is-invalid": errors.id
                                })}
                                onChange={this.onChange}
                                name="id"
                                value={this.state.id}
                            />
                            {errors.id && (
                                <div className="invalid-tooltip">{errors.id}</div>
                            )}
                        </div>

                        <div className="col">
                            <label htmlFor="ex2">Action</label>
                            <select className={classnames("form-control", {
                                "is-invalid": errors.type
                            })}
                                id="ex2" onChange={this.onChange} value={this.state.type}
                                name="type"
                            >   <option value="" defaultValue disabled>Select</option>
                                <option value="CLEANING">Cleaning</option>
                                <option value="REPAIR">Repair</option>
                            </select>
                            {errors.type && (
                                <div className="invalid-tooltip">{errors.type}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="time">Date and Time</label>
                            <input type="text" id="time" placeholder="Date and time"
                                className={classnames("form-control", {
                                    "is-invalid": errors.time
                                })}
                                onChange={this.onChange}
                                name="time"
                                value={this.state.time}
                            />
                            {errors.time && (
                                <div className="invalid-tooltip">{errors.time}</div>
                            )}
                        </div>
                        <div className="col">
                            <label htmlFor="worker">Worker</label>
                            <input type="text" id="worker" placeholder="Worker Name"
                                className={classnames("form-control", {
                                    "is-invalid": errors.worker
                                })}
                                onChange={this.onChange}
                                name="worker"
                                value={this.state.worker}
                            />
                            {errors.worker && (
                                <div className="invalid-tooltip">{errors.worker}</div>
                            )}
                        </div>
                        <div className="col-auto" >
                            <button type="submit" style={{ verticalAlign: '-39px' }} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>

                <div style={{ marginTop: '50px', overflow: 'scroll', maxHeight: 800 }}>
                    {!loading ? <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Room No.</th>
                                <th scope="col">Action</th>
                                <th scope="col">Date and Time</th>
                                <th scope="col">Worker</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableContent}
                        </tbody>
                    </table> : <div style={{ display: 'flex', justifyContent: 'center' }}><ReactLoading type="bars" color="#f56f42" /></div>}
                </div>
            </div>
        );
    }
}

RoomAction.propTypes = {
    createRoomAction: PropTypes.func.isRequired,
    getRoomAction: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    errors: state.errors,
    roomData: state.roomData,
});
export default connect(mapStateToProps, { createRoomAction, getRoomAction })(RoomAction);