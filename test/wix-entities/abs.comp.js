import _ from 'lodash'
import ViewState from 'entities/data-types/ViewState'

'this file is not the real source for the abs component..'

comp abs {

    public modifyInitialState(){}

    public onRender(template){
        var absContainerProps = template.props.children._store.props;
        absContainerProps.children = this.props.children || [];
        absContainerProps.children.forEach(function(child) {
            var props = child._store.props;
            if (props.__layout__) {
                //TODO: use prev style
                props.style = props.style || {};
                props.__layout__.mergeTo(props.style);

                props.size = {
                    width: props.__layout__.get('width').amount,
                    height: props.__layout__.get('height').amount
                };
            } else {
                //console.warn('#text nodes are not fully supported as of now');
            }
        });
    }

    public calcChildLayout(){
        return {
            top: (dragState.relativeCurrentPosition.y) + 'px',
            left: (dragState.relativeCurrentPosition.x) + 'px',
            width: dragState.dragSize.w + 'px',
            height: dragState.dragSize.h + 'px'
        };
    }

    public getChildLayoutAfterResize(resizeEvent){
        switch (resizeEvent.handleName) {

            case resizeEvent.HANDLES_ENUM.NORTH:
                handleTopCenter(resizeEvent);
                break;

            case resizeEvent.HANDLES_ENUM.SOUTH:
                handleBottomCenter(resizeEvent);
                break;
            case resizeEvent.HANDLES_ENUM.WEST:
                handleLeftCenter(resizeEvent);
                break;

            case resizeEvent.HANDLES_ENUM.EAST:
                handleRightCenter(resizeEvent);
                break;

            /////////////////////////////////////////

            case resizeEvent.HANDLES_ENUM.NORTH_WEST:
                handleTopCenter(resizeEvent);
                handleLeftCenter(resizeEvent);
                break;

            case resizeEvent.HANDLES_ENUM.NORTH_EAST:
                handleTopCenter(resizeEvent);
                handleRightCenter(resizeEvent);
                break;

            case resizeEvent.HANDLES_ENUM.SOUTH_EAST:
                handleBottomCenter(resizeEvent);
                handleRightCenter(resizeEvent);
                break;

            case resizeEvent.HANDLES_ENUM.SOUTH_WEST:
                handleBottomCenter(resizeEvent);
                handleLeftCenter(resizeEvent);
                break;

        }

        return resizeEvent.layoutInfo;
    }

}