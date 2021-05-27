import { Component, ReactNode } from "react";

interface MethodCardState{
  ShowInnerComponent: boolean;
}

interface MethodCardProps {
  name: string;
  description: string;
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
    <div className="menuCard__inner" onClick={() => this.setState({ ShowInnerComponent: true})}>
      {this.state.ShowInnerComponent === true ? (
        <div className="menuCard__shape">
          <div className="menuCard__method">
            {this.props.children}
          </div>
        </div>
      ) : (
        <>
          <div className="menuCard__trace">{this.props.sign}</div>
            <h5>{this.props.name}</h5>
            <p>{this.props.description}</p>
        </>
      )}
    </div>
  );
}
}
export default MethodCard;
