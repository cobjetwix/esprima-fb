import ViewState from 'entities/data-types/ViewState'
import ImageType from 'wix/datatypes/image.type'
import BaseTypes from 'entities/data-types/BaseTypes'
import ProductType from 'wix/datatypes/product.type'


pagecomp home {
    public onRender(appLogic, response, extraUri, props, state, callback){
		console.log("PageRender");
    }
    prop title : String = 'derf'
    prop logo : ImageType = {uri:'http://www.doctorwhotv.co.uk/wp-content/uploads/clara-capaldi-danny-series-8.jpg'}
    prop images : Array<ImageType> = [
        {uri:'http://1.bp.blogspot.com/-h4sdZbg69Kg/Tz0qFlqbgGI/AAAAAAAACKg/C5ZLOEXDOqc/s1600/1.jpg', type:"wix/datatypes/image.type"},
        {uri:'http://www.theinspirationblog.net/wp-content/uploads/2010/07/animal-manipulation-22.jpg', type:"wix/datatypes/image.type"},
        {uri:'http://2.bp.blogspot.com/_Q3HiyCHHPyE/TO9eAjgBsPI/AAAAAAAAALY/VwkLBfF0cqw/s1600/giraftle.jpg', type:"wix/datatypes/image.type"},
        {uri:'http://www.dencreative.com/wp-content/uploads/2013/04/a-450x605.jpg', type:"wix/datatypes/image.type"}
    ]
    state stateImg : ImageType = {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RnJdmh9ZT3L4DUM3T_lJFyu1iLmnD5JCC02daXmE-Vw-4NaI'}
    state label : String = ''
}
