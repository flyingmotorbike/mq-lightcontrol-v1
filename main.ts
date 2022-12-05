DFRobotMaqueenPlusV2.init()
basic.forever(function () {
    if (input.lightLevel() > 100) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 50)
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
        DFRobotMaqueenPlusV2.ledBlank()
    } else {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
        DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
        DFRobotMaqueenPlusV2.ledRainbow(1, 360)
    }
})
