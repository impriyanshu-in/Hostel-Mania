import React, { Component } from 'react';

class Block extends Component {

    onBatchSelect(block) {
        this.props.history.push(`/room/${block}`);
    }
    render() {
        return (
            <div className="mid container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Aravali (BH 1)</h5>
                            <p onClick={() => this.onBatchSelect('A')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Nilgiri (BH 2)</h5>
                            <p onClick={() => this.onBatchSelect('B')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Shivalik (BH 3)</h5>
                            <p onClick={() => this.onBatchSelect('C')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "12rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Gangotri (GH)</h5>
                            <p onClick={() => this.onBatchSelect('D')} className="card-text" style={{
                                cursor: 'pointer',
                                color: '#00a4eb'
                            }}
                            >Add or Check Info</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;