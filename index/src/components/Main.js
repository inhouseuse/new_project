import React from 'react'
import Button from './Button'

export default class Main extends React.Component {


    render() {

        let isCardView = true

        function toggleView() {
            console.log("object");
            isCardView = !isCardView
        }

        return (
            <main>
                <div className="start-area indigo white-text">
                    <div className="height-150"></div>
                    <div className="row">
                        <div className="col s12">
                            <div className="center-align">
                                <h1>Strat Application</h1>
                            </div>
                        </div>
                        <div className="col s12">
                            <div className="center-align">
                                <a className="waves-effect btn-large pink accent-2" id="js-getStart" onClick="">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="height-150"></div>
                </div>
               <div className="container">
                   <div className="row">
                       <div className="col s12">
                           <div className="viewgroup">
                               <h1>Open The Page</h1>
                               <Button label="CardView" disable={!isCardView} onClick={toggleView} />
                               <Button label="ListView" disable={isCardView} onClick={toggleView}/>
                           </div>
                       </div>
                    </div>
               </div> 
            </main>
        )
    }
}