import { Component, ReactNode } from "react";
import "./MethodCard.css";


interface MethodCardState{
  ShowInnerComponent: boolean;
}

interface MethodCardProps {
  name: String;
  description: String;
  sign: string;
  children: ReactNode;
}

class MethodCard extends Component<MethodCardProps, MethodCardState> {
  
  public constructor(props: MethodCardProps) {
    super(props);
    this.state = {
      ShowInnerComponent: false
    }
  }
  
  public render(): JSX.Element {

  return (
    <div className="menu-card__inner" onClick={() => this.setState({ ShowInnerComponent: true})}>
      {this.state.ShowInnerComponent === true ? (
        <div className="menu-card__shape">
          <div className="menu-card__method">
            {this.props.children}
          </div>
        </div>
      ) : (
        <>
          <div className="menu-card__trace">{this.props.sign}</div>
          <div className="menu-card__name">
            <h5>{this.props.name}</h5>
            <p>{this.props.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
}
export default MethodCard;
