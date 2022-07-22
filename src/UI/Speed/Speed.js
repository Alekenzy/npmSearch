import React from "react";

const UNIT = {
    KPH: 'Км/ч',
    MPH: 'Миль/ч'
  };
  
  // максимальная разрешённая скорость в населённом пункте в км/ч
  const MAX_SPEED_IN_CITY_IN_KPH = 60

  ////////////////////////////////////////////////////////////////////////////
                                                                            //
  function SpeedDetector(props) {     ///////////////////// SpeedDetector   //
    const unit = props.unit;                                                //
    if (props.speed >= props.maxSpeed) {                                    //
      return <div>Скорость в {UNIT[unit]} превышена!</div>;                 //
    }                                                                       //
    return <div>Скорость в {UNIT[unit]} не превышена.</div>;                //
  }                                                                         //
                                                                            //
  /////////////////////////////////////////////////////////////////////////////
  
  function isValidSpeed(value){
    if(value !== null && value !== '' && value !== undefined){
      let intValue = parseInt(value);
      return !(isNaN(intValue) || !isFinite(intValue));
    }  
    return false
  }
  
  function convertToKph(mph) {
    return mph * 1.61;
  }
  
  function convertToMph(kph) {
    return kph / 1.61;
  }
  
  function сonvertSpeed(value, convertor) {  
    if(isValidSpeed(value)){
      const intValue = parseInt(value)
      let converted = convertor(intValue);
      let rounded = Math.round(converted * 100) / 100
      return rounded.toString()
    }  
    return '';
  }
  
  ////////////////////////////////////////////////////////////////////////
                                                                        //
  class SpeedSetter extends React.Component {  ///////// SpeedSetter    //
    constructor(props) {                                                //
      super(props);                                                     //
      this.onChange = this.onChange.bind(this);                         //
    }                                                                   //
                                                                        //
    onChange(e) {                                                       //
      this.props.onChangeSpeed(e.target.value);                         //
    }                                                                   //
                                                                        //
    render() {                                                          //
      let speed = this.props.speed;                                     //
      let unit = this.props.unit;                                       //
      return (                                                          //
        <p>                                                             
          <span>Введите скорость в "{UNIT[unit]}": </span>              
          <input value={speed} onChange={this.onChange}/>
        </p>
      );
    }                                                                   //
  }                                                                     //
                                                                        //
  ////////////////////////////////////////////////////////////////////////
  
  class SpeedRadar extends React.Component {
    constructor(props){
      super(props);
      this.onChangeSpeedInKph = this.onChangeSpeedInKph.bind(this);
      this.onChangeSpeedInMph = this.onChangeSpeedInMph.bind(this);
      this.state = {speed: 0, unit: 'KPH'};
    }  
    
    onChangeSpeedInKph(speed) {
      this.setState({unit: 'KPH', speed});
    }
    
    onChangeSpeedInMph(speed) {
      this.setState({unit: 'MPH', speed});
    }
    
    render() {
      const unit = this.state.unit;
      const speed = this.state.speed;
      const kph = unit === 'MPH' ? сonvertSpeed(speed, convertToKph) : speed;
      const mph = unit === 'KPH' ? сonvertSpeed(speed, convertToMph) : speed;
  
      return (
        <div style={{color: "white"}}>
          <SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph}/>
          <SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph}/> 
          <SpeedDetector speed={kph} unit="KPH" maxSpeed={MAX_SPEED_IN_CITY_IN_KPH}/>
        </div>
      );
    }
  }

  export default SpeedRadar;