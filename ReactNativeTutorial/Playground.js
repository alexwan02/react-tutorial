import React , {Component} from 'react';
import {Animated , Image , View} from 'react-native';

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue : new Animated.Value(0) ,
    };
  }

  render(){
    return (
      <Animated.Image       // Base : Image , Text , View
        source={{uri : 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex : 1 ,
          transform : [                        // 'transform' is an ordered array
            {scale : this.state.bounceValue} , // Map 'bounceValue' to 'scale'
          ]
        }}
      />
    );
  }

  componentDidMount(){
    this.state.bounceValue.setValue(1.5);   // Start large
    Animated.spring(                        // Base : spring , decay , timing
      this.state.bounceValue , {            // Animate 'bounceValue'
        toValue : 0.8,                      // Animate to smaller size
        friction : 1 ,                                 // Bouncier spring
        tension : 40 ,
      }
    ).start();                              // Start the animation
    // Animated.timing(
    //   this.state.bounceValue  , {
    //     toValue : 0.8,
    //     duration : 500,
    //     delay : 1 ,
    // }).start();
  }
}

function animatedCompose(){
  Animated.sequence([               // Spring to start and twirl after decay finishes
    Animated.decay(position , {    // Coast to a stop
      velocity : {x : gestureState.vx , y : gestureState.vy} ,  // Velocity from gesture release
      deceleration : 0.997 ,
    }) ,
    Animated.parallel([               // After decay , in parallel
      Animated.spring(position , {    // Return to start
        toValue : { x : 0 , y : 0}
      }) ,
      Animated.timing(twirl , {      // And twirl
        toValue : 360 ,
      }) ,
    ]),
  ]).start();                   // start the sequence group
}
