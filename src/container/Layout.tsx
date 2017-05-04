import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Screen } from "../components/Screen";
import { Keys } from "../components/Keys";

import { IdentifyDigit } from "../actions";
class Layout extends React.Component<any, any>{


    public render() {


        return (
            <div id="calculator">
                {/* Screen and clear key*/}
                <Screen value={this.props.value.result === 0 ? "" : this.props.value.result}
                    onMousedown={(clear: any) => this.props.IdentifyDigit(clear)}
                />
                {/* operators and other keys*/}
                <Keys onMouseDown={(digit: any) => this.props.IdentifyDigit(digit)} />
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        value: state.value
    };
}

function mapDispathToProps(dispath: any) {
    return bindActionCreators({
        IdentifyDigit: IdentifyDigit

    }, dispath);
}

export default connect(mapStateToProps, mapDispathToProps)(Layout);
