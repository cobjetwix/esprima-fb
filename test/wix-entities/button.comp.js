import ViewState from 'entities/data-types/ViewState'

enum MouseState{up, over, down }


comp button {

    prop label:String = 'button';
    prop onClick:Function;

    state mouse:MouseState = MouseState.up;

    public onMouseOver(){
        this.state.mouse = 'over';
    }

    public onMouseOut(){
        this.state.mouse = 'up';
    }

    public onMouseDown(){
        this.state.mouse = 'down';
        this.props.onClick();
    }

    public onMouseUp(){
        this.state.mouse = 'up';
    }
}