Blockly.JavaScript['MotorDriveForKB15_setup'] = function (block) {
	var code = '';
	code += '#EXTINC#include <MotorDriveForKB15.h>#END\n';
	code += '\n';
	code += 'MotorDriveForKB15_Begin();\n';
    return code;
};
Blockly.JavaScript['MotorDriveForKB15_motor'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'motor(' + dropdown_ch + ', ' + dropdown_dir + ', ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['MotorDriveForKB15_motor_forward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 1, ' + value_speed + ');\t';
  code += 'motor(2, 1, ' + value_speed + ');\n';
  return code;
};

Blockly.JavaScript['MotorDriveForKB15_motor_backward'] = function(block) {
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var code = '';
  code += 'motor(1, 2, ' + value_speed + ');\t';
  code += 'motor(2, 2, ' + value_speed + ');\n';
  return code;
};
Blockly.JavaScript['MotorDriveForKB15_motor_spin'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    code += 'motor(1, 2, ' + value_speed + ');\t';
    code += 'motor(2, 1, ' + value_speed + ');\n';
  }
  else if(dropdown_ch == 2){
    code += 'motor(1, 1, ' + value_speed + ');\t';
    code += 'motor(2, 2, ' + value_speed + ');\n';
  }
  return code;
};
Blockly.JavaScript['MotorDriveForKB15_motor_turn'] = function(block) {
  var dropdown_ch = block.getFieldValue('direction');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = '';
  if(dropdown_ch == 1){
    code += 'motor(1, 1, 0);\t';
    code += 'motor(2, 1, ' + value_speed + ');\n';
  }
  else if(dropdown_ch == 2){
    code += 'motor(1, 1, ' + value_speed + ');\t';
    code += 'motor(2, 1, 0);\n';
  }
  return code;
};
Blockly.JavaScript['MotorDriveForKB15_motor_stop_ch'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var code = '';
  if(dropdown_ch == 0){
    code += 'motor( 1, 1, 0);\n';
    code += 'motor( 2, 1, 0);\n';
  }
  else if(dropdown_ch == 1){
    code = 'motor( 1, 1, 0);\n';
  }
  else if(dropdown_ch == 2){
    code = 'motor( 2, 1, 0);\n';
  }
  
  return code;
};
  Blockly.JavaScript['MotorDriveForKB15_analog'] = function(block) {
    var value_pin = block.getFieldValue('pin');
    var code = `analogRead(${value_pin})`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };