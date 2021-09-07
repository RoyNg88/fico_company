import React from 'react'
import sample from './asset/image/sample.png'
import './style.css'

export default function JoinToDay() {
    return (
        <section>
            <div className="jumbotron">
                <div className = "row">
                    <div className="col-md-6">
                        <h1>Lorem ipsum</h1>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                            sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                        <div className="join_btn" style={{marginTop: '100px'}}><button><a >Join Today</a></button></div>
                    </div>
                    <div style ={{margin: 'auto'}} className = "col-md-6">
                        <img style={{float: 'right'}} src={sample} alt=" " />
                    </div>
                </div>
            </div>
        </section>
    )
}