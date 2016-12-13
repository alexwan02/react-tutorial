import {PropTypes} from 'react';
import {requireNativeComponent , View} from 'react-native';
var iface = {
  name : 'ImageView' ,
  propTypes : {
    src : PropTypes.string ,
    boderRadius : PropTypes.numbder ,
    resizeBorder : PropTypes.oneOf(['cover' , 'container' , 'stretch']) ,
    ...View.propTypes   // Include the default view properties
  },
}

module.export = requireNativeComponent('RCTImageView' , iface);
