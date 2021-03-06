//通过json来定义block
// Blockly.defineBlocksWithJsonArray([
// {
//   "type": "setlighton",
//   "message0": "set light on",
//   "previousStatement": null,
//   "nextStatement": null,
//   "colour": 230,
//   "tooltip": "0x30"
// },

// {
//   "type": "setlightoff",
//   "message0": "set light off",
//   "previousStatement": null,
//   "nextStatement": null,
//   "colour": 230,
//   "tooltip": "0x31"
// }
// ]);


Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "NodeProfile",
      "message0": "NodeProfile %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NodeProfile",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "FaultStatus  Fault",
              "FaultStatus  Fault"
            ],
            [
              "FaultStatus  No Fault",
              "FaultStatus  No Fault"
            ]
          ]
        }
      ]
    },
    {
      "type": "SuperClass",
      "message0": "SuperClass %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SuperClass",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OperationStatus  ON",
              "OperationStatus  ON"
            ],
            [
              "OperationStatus  OFF",
              "OperationStatus  OFF"
            ],
            [
              "FaultStatus  Fault",
              "FaultStatus  Fault"
            ],
            [
              "FaultStatus  No Fault",
              "FaultStatus  No Fault"
            ],
            [
              "PowerSavingOperationSetting  Power Saving",
              "PowerSavingOperationSetting  Power Saving"
            ],
            [
              "PowerSavingOperationSetting  No Power Saving",
              "PowerSavingOperationSetting  No Power Saving"
            ]
          ]
        }
      ]
    },
    {
      "type": "GasLeakSensor",
      "message0": "GasLeakSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GasLeakSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "GasLeakOccurrenceStatus  YES",
              "GasLeakOccurrenceStatus  YES"
            ],
            [
              "GasLeakOccurrenceStatus  NO",
              "GasLeakOccurrenceStatus  NO"
            ],
            [
              "GasLeakOccurrenceStatusResetting  Reset",
              "GasLeakOccurrenceStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "CrimePreventionSensor",
      "message0": "CrimePreventionSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CrimePreventionSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "InvasionOccurrenceStatus  YES",
              "InvasionOccurrenceStatus  YES"
            ],
            [
              "InvasionOccurrenceStatus  NO",
              "InvasionOccurrenceStatus  NO"
            ],
            [
              "InvasionOccurrenceStatusResetting  Reset",
              "InvasionOccurrenceStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "EmergencyButton",
      "message0": "EmergencyButton %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EmergencyButton",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "EmergencyOccurrenceStatus  YES",
              "EmergencyOccurrenceStatus  YES"
            ],
            [
              "EmergencyOccurrenceStatus  NO",
              "EmergencyOccurrenceStatus  NO"
            ],
            [
              "EmergencyOccurrenceStatusResetting  Reset",
              "EmergencyOccurrenceStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "FirstAidSensor",
      "message0": "FirstAidSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FirstAidSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "FirstAidOccurrenceStatus  YES",
              "FirstAidOccurrenceStatus  YES"
            ],
            [
              "FirstAidOccurrenceStatus  NO",
              "FirstAidOccurrenceStatus  NO"
            ],
            [
              "FirstAidOccurrenceStatusResetting  Reset",
              "FirstAidOccurrenceStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "EarthquakeSensor",
      "message0": "EarthquakeSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EarthquakeSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "EarthquakeOccurrenceStatus  YES",
              "EarthquakeOccurrenceStatus  YES"
            ],
            [
              "EarthquakeOccurrenceStatus  NO",
              "EarthquakeOccurrenceStatus  NO"
            ],
            [
              "EarthquakeOccurrenceStatusResetting  Reset",
              "EarthquakeOccurrenceStatusResetting  Reset"
            ],
            [
              "SiValueResetting  Reset",
              "SiValueResetting  Reset"
            ],
            [
              "CollapseOccurrenceStatus  YES",
              "CollapseOccurrenceStatus  YES"
            ],
            [
              "CollapseOccurrenceStatus  NO",
              "CollapseOccurrenceStatus  NO"
            ],
            [
              "CollapseOccurrenceStatusResetting  Reset",
              "CollapseOccurrenceStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricLeakSensor",
      "message0": "ElectricLeakSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricLeakSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ElectricLeakOccurrenceStatus  YES",
              "ElectricLeakOccurrenceStatus  YES"
            ],
            [
              "ElectricLeakOccurrenceStatus  NO",
              "ElectricLeakOccurrenceStatus  NO"
            ],
            [
              "ElectricLeakOccurrenceStatusResetting  Reset",
              "ElectricLeakOccurrenceStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "HumanDetectionSensor",
      "message0": "HumanDetectionSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HumanDetectionSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "HumanDetectionStatus  YES",
              "HumanDetectionStatus  YES"
            ],
            [
              "HumanDetectionStatus  NO",
              "HumanDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "VisitorSensor",
      "message0": "VisitorSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VisitorSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "VisitorDetectionStatus  YES",
              "VisitorDetectionStatus  YES"
            ],
            [
              "VisitorDetectionStatus  NO",
              "VisitorDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "CallSensor",
      "message0": "CallSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CallSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "CallStatus  YES",
              "CallStatus  YES"
            ],
            [
              "CallStatus  NO",
              "CallStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "CondensationSensor",
      "message0": "CondensationSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CondensationSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "CondensationDetectionStatus  YES",
              "CondensationDetectionStatus  YES"
            ],
            [
              "CondensationDetectionStatus  NO",
              "CondensationDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "AirPollution",
      "message0": "AirPollution %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "AirPollution",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "AirPollutionDetectionStatus  YES",
              "AirPollutionDetectionStatus  YES"
            ],
            [
              "AirPollutionDetectionStatus  NO",
              "AirPollutionDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "OxygenSensor",
      "message0": "OxygenSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OxygenSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "IlluminanceSensor",
      "message0": "IlluminanceSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "IlluminanceSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "SoundSensor",
      "message0": "SoundSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SoundSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SoundDetectionStatus  YES",
              "SoundDetectionStatus  YES"
            ],
            [
              "SoundDetectionStatus  NO",
              "SoundDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "MailingSensor",
      "message0": "MailingSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MailingSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "MailingDetectionStatus  YES",
              "MailingDetectionStatus  YES"
            ],
            [
              "MailingDetectionStatus  NO",
              "MailingDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "WeightSensor",
      "message0": "WeightSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WeightSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "WeightDetectionStatus  YES",
              "WeightDetectionStatus  YES"
            ],
            [
              "WeightDetectionStatus  NO",
              "WeightDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "TemperatureSensor",
      "message0": "TemperatureSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TemperatureSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "HumiditySensor",
      "message0": "HumiditySensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HumiditySensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "RainSensor",
      "message0": "RainSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "RainSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "RainDetectionStatus  YES",
              "RainDetectionStatus  YES"
            ],
            [
              "RainDetectionStatus  NO",
              "RainDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "WaterLevelSensor",
      "message0": "WaterLevelSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WaterLevelSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "WaterLevelOverDetectionStatus  YES",
              "WaterLevelOverDetectionStatus  YES"
            ],
            [
              "WaterLevelOverDetectionStatus  NO",
              "WaterLevelOverDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "BathWaterLevelSensor",
      "message0": "BathWaterLevelSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BathWaterLevelSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "BathWaterLevelOverDetectionStatus  YES",
              "BathWaterLevelOverDetectionStatus  YES"
            ],
            [
              "BathWaterLevelOverDetectionStatus  NO",
              "BathWaterLevelOverDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "BathHeatingStatusSensor",
      "message0": "BathHeatingStatusSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BathHeatingStatusSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "BathHeatingDetectionStatus  YES",
              "BathHeatingDetectionStatus  YES"
            ],
            [
              "BathHeatingDetectionStatus  NO",
              "BathHeatingDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "WaterLeakSensor",
      "message0": "WaterLeakSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WaterLeakSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "WaterLeakDetectionStatus  YES",
              "WaterLeakDetectionStatus  YES"
            ],
            [
              "WaterLeakDetectionStatus  NO",
              "WaterLeakDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "WaterOverflowSensor",
      "message0": "WaterOverflowSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WaterOverflowSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "WaterOverflowDetectionStatus  YES",
              "WaterOverflowDetectionStatus  YES"
            ],
            [
              "WaterOverflowDetectionStatus  NO",
              "WaterOverflowDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "FireSensor",
      "message0": "FireSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FireSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "FireOccurrenceDetectionStatus  YES",
              "FireOccurrenceDetectionStatus  YES"
            ],
            [
              "FireOccurrenceDetectionStatus  NO",
              "FireOccurrenceDetectionStatus  NO"
            ],
            [
              "FireOccurrenceDetectionStatusResetting  Reset",
              "FireOccurrenceDetectionStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "CigaretteSmokeSensor",
      "message0": "CigaretteSmokeSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CigaretteSmokeSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "Smoke(cigarette)DetectionStatus  YES",
              "Smoke(cigarette)DetectionStatus  YES"
            ],
            [
              "Smoke(cigarette)DetectionStatus  NO",
              "Smoke(cigarette)DetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "Co2Sensor",
      "message0": "CO2Sensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Co2Sensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "Measured value of CO2 concentration",
              "Measured value of CO2 concentration"
            ]
          ]
        }
      ]
    },
    {
      "type": "GasSensor",
      "message0": "GasSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GasSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "GasDetectionStatus  YES",
              "GasDetectionStatus  YES"
            ],
            [
              "GasDetectionStatus  NO",
              "GasDetectionStatus  NO"
            ],
            [
              "Measured value of gas concentration",
              "Measured value of gas concentration"
            ]
          ]
        }
      ]
    },
    {
      "type": "VocSensor",
      "message0": "VocSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VocSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "VocDetectionStatus  YES",
              "VocDetectionStatus  YES"
            ],
            [
              "VocDetectionStatus  NO",
              "VocDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "DifferentialPressureSensor",
      "message0": "DifferentialPressureSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DifferentialPressureSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "AirSpeedSensor",
      "message0": "AirSpeedSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "AirSpeedSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "OdorSensor",
      "message0": "OdorSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OdorSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OdorDetectionStatus  YES",
              "OdorDetectionStatus  YES"
            ],
            [
              "OdorDetectionStatus  NO",
              "OdorDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "FlameSensor",
      "message0": "FlameSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FlameSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "FlameDetectionStatus  YES",
              "FlameDetectionStatus  YES"
            ],
            [
              "FlameDetectionStatus  NO",
              "FlameDetectionStatus  NO"
            ],
            [
              "FlameDetectionStatusResetting  Reset",
              "FlameDetectionStatusResetting  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricEnergySensor",
      "message0": "ElectricEnergySensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricEnergySensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "CurrentValueSensor",
      "message0": "CurrentValueSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CurrentValueSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "WaterFlowRate",
      "message0": "WaterFlowRate %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WaterFlowRate",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "MicromotionSensor",
      "message0": "MicromotionSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MicromotionSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "MicromotionDetectionStatus  YES",
              "MicromotionDetectionStatus  YES"
            ],
            [
              "MicromotionDetectionStatus  NO",
              "MicromotionDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "PassageSensor",
      "message0": "PassageSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PassageSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "PassageDetectionDirection  No passage",
              "PassageDetectionDirection  No passage"
            ],
            [
              "PassageDetectionDirection  N",
              "PassageDetectionDirection  N"
            ],
            [
              "PassageDetectionDirection  NE",
              "PassageDetectionDirection  NE"
            ],
            [
              "PassageDetectionDirection  E",
              "PassageDetectionDirection  E"
            ],
            [
              "PassageDetectionDirection  SE",
              "PassageDetectionDirection  SE"
            ],
            [
              "PassageDetectionDirection  S",
              "PassageDetectionDirection  S"
            ],
            [
              "PassageDetectionDirection  SW",
              "PassageDetectionDirection  SW"
            ],
            [
              "PassageDetectionDirection  W",
              "PassageDetectionDirection  W"
            ],
            [
              "PassageDetectionDirection  NW",
              "PassageDetectionDirection  NW"
            ],
            [
              "PassageDetectionDirection  Direction unknown",
              "PassageDetectionDirection  Direction unknown"
            ]
          ]
        }
      ]
    },
    {
      "type": "BedPresenceSensor",
      "message0": "BedPresenceSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BedPresenceSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "BedPresenceDetectionStatus  YES",
              "BedPresenceDetectionStatus  YES"
            ],
            [
              "BedPresenceDetectionStatus  NO",
              "BedPresenceDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "OpenCloseSensor",
      "message0": "OpenCloseSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OpenCloseSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "DegreeOfOpeningDetectionStatus2  YES",
              "DegreeOfOpeningDetectionStatus2  YES"
            ],
            [
              "DegreeOfOpeningDetectionStatus2  NO",
              "DegreeOfOpeningDetectionStatus2  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "ActivityAmountSensor",
      "message0": "ActivityAmountSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ActivityAmountSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "HumanBodyDetectionLocation1",
      "message0": "HumanBodyDetectionLocation1 %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HumanBodyDetectionLocation1",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "SnowSensor",
      "message0": "SnowSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SnowSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SnowDetectionStatus  YES",
              "SnowDetectionStatus  YES"
            ],
            [
              "SnowDetectionStatus  NO",
              "SnowDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "AirPressureSensor",
      "message0": "AirPressureSensor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "AirPressureSensor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "HomeAirConditioner",
      "message0": "HomeAirConditioner %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HomeAirConditioner",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "PowerSavingOperationSetting  ON",
              "PowerSavingOperationSetting  ON"
            ],
            [
              "PowerSavingOperationSetting  OFF",
              "PowerSavingOperationSetting  OFF"
            ],
            [
              "OnTimerSetting  Both the time- and relative time-based reservation functions are ON",
              "OnTimerSetting  Both the time- and relative time-based reservation functions are ON"
            ],
            [
              "OnTimerSetting  Both reservation functions are OFF",
              "OnTimerSetting  Both reservation functions are OFF"
            ],
            [
              "OnTimerSetting  Time-based reservation functions is ON",
              "OnTimerSetting  Time-based reservation functions is ON"
            ],
            [
              "OnTimerSetting  Relative time-based reservation functions is ON",
              "OnTimerSetting  Relative time-based reservation functions is ON"
            ],
            [
              "OffTimerSetting  Both the time- and relative time-based reservation functions are ON",
              "OffTimerSetting  Both the time- and relative time-based reservation functions are ON"
            ],
            [
              "OffTimerSetting  Both reservation functions are OFF",
              "OffTimerSetting  Both reservation functions are OFF"
            ],
            [
              "OffTimerSetting  Time-based reservation functions is ON",
              "OffTimerSetting  Time-based reservation functions is ON"
            ],
            [
              "OffTimerSetting  Relative time-based reservation functions is ON",
              "OffTimerSetting  Relative time-based reservation functions is ON"
            ],
            [
              "AutomaticControlOfAirFlowDirectionSetting  Automatic",
              "AutomaticControlOfAirFlowDirectionSetting  Automatic"
            ],
            [
              "AutomaticControlOfAirFlowDirectionSetting  Non Auto",
              "AutomaticControlOfAirFlowDirectionSetting  Non Auto"
            ],
            [
              "AutomaticControlOfAirFlowDirectionSetting  Auto(vertical)",
              "AutomaticControlOfAirFlowDirectionSetting  Auto(vertical)"
            ],
            [
              "AutomaticControlOfAirFlowDirectionSetting  Auto(horizontal)",
              "AutomaticControlOfAirFlowDirectionSetting  Auto(horizontal)"
            ],
            [
              "AutomaticSwingOfAirFlowSetting  OFF",
              "AutomaticSwingOfAirFlowSetting  OFF"
            ],
            [
              "AutomaticSwingOfAirFlowSetting  Vertical",
              "AutomaticSwingOfAirFlowSetting  Vertical"
            ],
            [
              "AutomaticSwingOfAirFlowSetting  Holizontal",
              "AutomaticSwingOfAirFlowSetting  Holizontal"
            ],
            [
              "AutomaticSwingOfAirFlowSetting  Vertical and Holizontal",
              "AutomaticSwingOfAirFlowSetting  Vertical and Holizontal"
            ],
            [
              "AirFlowDirection(vertical)Setting  Uppermost",
              "AirFlowDirection(vertical)Setting  Uppermost"
            ],
            [
              "AirFlowDirection(vertical)Setting  Lowermost",
              "AirFlowDirection(vertical)Setting  Lowermost"
            ],
            [
              "AirFlowDirection(vertical)Setting  Central",
              "AirFlowDirection(vertical)Setting  Central"
            ],
            [
              "AirFlowDirection(vertical)Setting  Midpoint between uppermost and central",
              "AirFlowDirection(vertical)Setting  Midpoint between uppermost and central"
            ],
            [
              "AirFlowDirection(vertical)Setting  Midpoint between lowermost and central",
              "AirFlowDirection(vertical)Setting  Midpoint between lowermost and central"
            ],
            [
              "AirFlowDirection(horizontal)Setting  Rightward",
              "AirFlowDirection(horizontal)Setting  Rightward"
            ],
            [
              "AirFlowDirection(horizontal)Setting  Leftward",
              "AirFlowDirection(horizontal)Setting  Leftward"
            ],
            [
              "AirFlowDirection(horizontal)Setting  Central",
              "AirFlowDirection(horizontal)Setting  Central"
            ],
            [
              "AirFlowDirection(horizontal)Setting  Rightward and leftward",
              "AirFlowDirection(horizontal)Setting  Rightward and leftward"
            ],
            [
              "SpecialState  Normal operation",
              "SpecialState  Normal operation"
            ],
            [
              "SpecialState  Defrosting",
              "SpecialState  Defrosting"
            ],
            [
              "SpecialState  Preheating",
              "SpecialState  Preheating"
            ],
            [
              "SpecialState  Heat removal",
              "SpecialState  Heat removal"
            ],
            [
              "NonPriorityState  Normal",
              "NonPriorityState  Normal"
            ],
            [
              "NonPriorityState  Non-priority",
              "NonPriorityState  Non-priority"
            ],
            [
              "OperationModeSetting  Automatic",
              "OperationModeSetting  Automatic"
            ],
            [
              "OperationModeSetting  Cooling",
              "OperationModeSetting  Cooling"
            ],
            [
              "OperationModeSetting  Heating",
              "OperationModeSetting  Heating"
            ],
            [
              "OperationModeSetting  Dehumidification",
              "OperationModeSetting  Dehumidification"
            ],
            [
              "OperationModeSetting  Air circulation",
              "OperationModeSetting  Air circulation"
            ],
            [
              "OperationModeSetting  Other",
              "OperationModeSetting  Other"
            ],
            [
              "AutomaticTemperatureControlSetting  ON",
              "AutomaticTemperatureControlSetting  ON"
            ],
            [
              "AutomaticTemperatureControlSetting  OFF",
              "AutomaticTemperatureControlSetting  OFF"
            ],
            [
              "NormalHighspeedSilentOperationSetting  Normal",
              "NormalHighspeedSilentOperationSetting  Normal"
            ],
            [
              "NormalHighspeedSilentOperationSetting  High speed",
              "NormalHighspeedSilentOperationSetting  High speed"
            ],
            [
              "NormalHighspeedSilentOperationSetting  Silent",
              "NormalHighspeedSilentOperationSetting  Silent"
            ],
            [
              "SetTemperatureValue  Undefined",
              "SetTemperatureValue  Undefined"
            ],
            [
              "SetTemperatureValueInCoolingMode  Undefined",
              "SetTemperatureValueInCoolingMode  Undefined"
            ],
            [
              "SetTemperatureValueInHeatingMode  Undefined",
              "SetTemperatureValueInHeatingMode  Undefined"
            ],
            [
              "SetTemperatureValueInDehumidifyingMode  Undefined",
              "SetTemperatureValueInDehumidifyingMode  Undefined"
            ],
            [
              "MeasuredCooledAirTemperature  Undefined",
              "MeasuredCooledAirTemperature  Undefined"
            ],
            [
              "MeasuredOutdoorAirTemperature  Undefined",
              "MeasuredOutdoorAirTemperature  Undefined"
            ],
            [
              "RelativeTemperatureSetting  Undefined",
              "RelativeTemperatureSetting  Undefined"
            ],
            [
              "VentilationFunctionSetting  Ventilation function ON(outlet direction)",
              "VentilationFunctionSetting  Ventilation function ON(outlet direction)"
            ],
            [
              "VentilationFunctionSetting  Ventilation function OFF",
              "VentilationFunctionSetting  Ventilation function OFF"
            ],
            [
              "VentilationFunctionSetting  Ventilation function ON(intake direction)",
              "VentilationFunctionSetting  Ventilation function ON(intake direction)"
            ],
            [
              "VentilationFunctionSetting  Ventilation function ON(outlet and intake direction)",
              "VentilationFunctionSetting  Ventilation function ON(outlet and intake direction)"
            ],
            [
              "HumidifierFunctionSetting  ON",
              "HumidifierFunctionSetting  ON"
            ],
            [
              "HumidifierFunctionSetting  OFF",
              "HumidifierFunctionSetting  OFF"
            ],
            [
              "VentilationAirFlowRateSetting  Automatic",
              "VentilationAirFlowRateSetting  Automatic"
            ],
            [
              "DegreeOfHumidificationSetting  Automatic",
              "DegreeOfHumidificationSetting  Automatic"
            ],
            [
              "SpecialFunctionSetting  No setting",
              "SpecialFunctionSetting  No setting"
            ],
            [
              "SpecialFunctionSetting  Clothes dryer function",
              "SpecialFunctionSetting  Clothes dryer function"
            ],
            [
              "SpecialFunctionSetting  Condensation suppressorfunction",
              "SpecialFunctionSetting  Condensation suppressorfunction"
            ],
            [
              "SpecialFunctionSetting  Mite and mold control function",
              "SpecialFunctionSetting  Mite and mold control function"
            ],
            [
              "SpecialFunctionSetting  Active defrosting function",
              "SpecialFunctionSetting  Active defrosting function"
            ],
            [
              "AirPurificationModeSetting  ON",
              "AirPurificationModeSetting  ON"
            ],
            [
              "AirPurificationModeSetting  OFF",
              "AirPurificationModeSetting  OFF"
            ],
            [
              "Buzzer  Buzzer sound generation",
              "Buzzer  Buzzer sound generation"
            ]
          ]
        }
      ]
    },
    {
      "type": "VentilationFan",
      "message0": "VentilationFan %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VentilationFan",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "AirFlowRateSetting  Automatic",
              "AirFlowRateSetting  Automatic"
            ],
            [
              "VentilationAutoSetting  ON",
              "VentilationAutoSetting  ON"
            ],
            [
              "VentilationAutoSetting  OFF",
              "VentilationAutoSetting  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "AirConditionerVentilationFan",
      "message0": "AirConditionerVentilationFan %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "AirConditionerVentilationFan",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SetValueOfVentilationAirFlowRate  Automatic",
              "SetValueOfVentilationAirFlowRate  Automatic"
            ],
            [
              "VentilationModeAutomaticModeSetting  Automatic",
              "VentilationModeAutomaticModeSetting  Automatic"
            ],
            [
              "VentilationModeAutomaticModeSetting  Non-automatic",
              "VentilationModeAutomaticModeSetting  Non-automatic"
            ],
            [
              "VentilationMethodSetting  Blowing ventilation ",
              "VentilationMethodSetting  Blowing ventilation "
            ],
            [
              "VentilationMethodSetting  Air conditioning ventilation",
              "VentilationMethodSetting  Air conditioning ventilation"
            ],
            [
              "VentilationModeSetting  normal",
              "VentilationModeSetting  normal"
            ],
            [
              "VentilationModeSetting  heat-exchange",
              "VentilationModeSetting  heat-exchange"
            ],
            [
              "VentilationModeSetting  cooling",
              "VentilationModeSetting  cooling"
            ],
            [
              "VentilationModeSetting  heating",
              "VentilationModeSetting  heating"
            ],
            [
              "VentilationModeSetting  dehumidifying",
              "VentilationModeSetting  dehumidifying"
            ],
            [
              "VentilationModeSetting  humidifying",
              "VentilationModeSetting  humidifying"
            ],
            [
              "VentilationModeSetting  other",
              "VentilationModeSetting  other"
            ],
            [
              "VentilationAutoSetting  Automatic",
              "VentilationAutoSetting  Automatic"
            ],
            [
              "VentilationAutoSetting  Non-automatic",
              "VentilationAutoSetting  Non-automatic"
            ],
            [
              "Smoke(cigarette)DetectionStatus  YES",
              "Smoke(cigarette)DetectionStatus  YES"
            ],
            [
              "Smoke(cigarette)DetectionStatus  NO",
              "Smoke(cigarette)DetectionStatus  NO"
            ],
            [
              "PollutionDetectionStatus  YES",
              "PollutionDetectionStatus  YES"
            ],
            [
              "PollutionDetectionStatus  NO",
              "PollutionDetectionStatus  NO"
            ],
            [
              "HeatExchangerOperationSetting  ON",
              "HeatExchangerOperationSetting  ON"
            ],
            [
              "HeatExchangerOperationSetting  OFF",
              "HeatExchangerOperationSetting  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "AirCleaner",
      "message0": "AirCleaner %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "AirCleaner",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "AirFlowRateSetting  Automatic",
              "AirFlowRateSetting  Automatic"
            ],
            [
              "AirPollutionDetectionStatus  YES",
              "AirPollutionDetectionStatus  YES"
            ],
            [
              "AirPollutionDetectionStatus  NO",
              "AirPollutionDetectionStatus  NO"
            ],
            [
              "SmokeDetectionStatus  YES",
              "SmokeDetectionStatus  YES"
            ],
            [
              "SmokeDetectionStatus  NO",
              "SmokeDetectionStatus  NO"
            ],
            [
              "OpticalCatalystOperationSetting  ON",
              "OpticalCatalystOperationSetting  ON"
            ],
            [
              "OpticalCatalystOperationSetting  OFF",
              "OpticalCatalystOperationSetting  OFF"
            ],
            [
              "FilterChangeNotice  YES",
              "FilterChangeNotice  YES"
            ],
            [
              "FilterChangeNotice  NO",
              "FilterChangeNotice  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "Humidifier",
      "message0": "Humidifier %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Humidifier",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ReservationSetOfOffTimer  ON",
              "ReservationSetOfOffTimer  ON"
            ],
            [
              "ReservationSetOfOffTimer  OFF",
              "ReservationSetOfOffTimer  OFF"
            ],
            [
              "IonEmissionSetting  ON",
              "IonEmissionSetting  ON"
            ],
            [
              "IonEmissionSetting  OFF",
              "IonEmissionSetting  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricHeater",
      "message0": "ElectricHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "OffTimerSetting  ON",
              "OffTimerSetting  ON"
            ],
            [
              "OffTimerSetting  OFF",
              "OffTimerSetting  OFF"
            ],
            [
              "AirFlowRateSetting  Automatic",
              "AirFlowRateSetting  Automatic"
            ],
            [
              "AutomaticTemperatureControlSetting  ON",
              "AutomaticTemperatureControlSetting  ON"
            ],
            [
              "AutomaticTemperatureControlSetting  OFF",
              "AutomaticTemperatureControlSetting  OFF"
            ],
            [
              "SetTemperatureValue  Undefined",
              "SetTemperatureValue  Undefined"
            ]
          ]
        }
      ]
    },
    {
      "type": "FanHeater",
      "message0": "FanHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FanHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  Both the time- and relative time-based reservation functions are ON",
              "OnTimerSetting  Both the time- and relative time-based reservation functions are ON"
            ],
            [
              "OnTimerSetting  Both reservation functions are OFF",
              "OnTimerSetting  Both reservation functions are OFF"
            ],
            [
              "OnTimerSetting  Time-based reservation functions is ON",
              "OnTimerSetting  Time-based reservation functions is ON"
            ],
            [
              "OnTimerSetting  Relative time-based reservation functions is ON",
              "OnTimerSetting  Relative time-based reservation functions is ON"
            ],
            [
              "OffTimerSetting  Both the time- and relative time-based reservation functions are ON",
              "OffTimerSetting  Both the time- and relative time-based reservation functions are ON"
            ],
            [
              "OffTimerSetting  Both reservation functions are OFF",
              "OffTimerSetting  Both reservation functions are OFF"
            ],
            [
              "OffTimerSetting  Time-based reservation functions is ON",
              "OffTimerSetting  Time-based reservation functions is ON"
            ],
            [
              "OffTimerSetting  Relative time-based reservation functions is ON",
              "OffTimerSetting  Relative time-based reservation functions is ON"
            ],
            [
              "AutomaticTemperatureControlSetting  ON",
              "AutomaticTemperatureControlSetting  ON"
            ],
            [
              "AutomaticTemperatureControlSetting  OFF",
              "AutomaticTemperatureControlSetting  OFF"
            ],
            [
              "MeasuredTemperature  Undefined",
              "MeasuredTemperature  Undefined"
            ],
            [
              "ExtensionalOperationSetting  ON",
              "ExtensionalOperationSetting  ON"
            ],
            [
              "ExtensionalOperationSetting  OFF",
              "ExtensionalOperationSetting  OFF"
            ],
            [
              "IonEmissionSetting  ON",
              "IonEmissionSetting  ON"
            ],
            [
              "IonEmissionSetting  OFF",
              "IonEmissionSetting  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricStorageHeater",
      "message0": "ElectricStorageHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricStorageHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "AirFlowRateSetting  OFF",
              "AirFlowRateSetting  OFF"
            ],
            [
              "AirFlowRateSetting  Low",
              "AirFlowRateSetting  Low"
            ],
            [
              "AirFlowRateSetting  High",
              "AirFlowRateSetting  High"
            ],
            [
              "AirFlowRateSetting  Auto",
              "AirFlowRateSetting  Auto"
            ],
            [
              "FanOperationStatus  OFF",
              "FanOperationStatus  OFF"
            ],
            [
              "FanOperationStatus  Low",
              "FanOperationStatus  Low"
            ],
            [
              "FanOperationStatus  High",
              "FanOperationStatus  High"
            ],
            [
              "HeatStorageOperationStatus  ON",
              "HeatStorageOperationStatus  ON"
            ],
            [
              "HeatStorageOperationStatus  OFF",
              "HeatStorageOperationStatus  OFF"
            ],
            [
              "DaytimeHeatStorageSetting  ON",
              "DaytimeHeatStorageSetting  ON"
            ],
            [
              "DaytimeHeatStorageSetting  OFF",
              "DaytimeHeatStorageSetting  OFF"
            ],
            [
              "DaytimeHeatStorageAbility  YES",
              "DaytimeHeatStorageAbility  YES"
            ],
            [
              "DaytimeHeatStorageAbility  NO",
              "DaytimeHeatStorageAbility  NO"
            ],
            [
              "RadiationMethod  YES",
              "RadiationMethod  YES"
            ],
            [
              "RadiationMethod  NO",
              "RadiationMethod  NO"
            ],
            [
              "ChildLockSetting  YES",
              "ChildLockSetting  YES"
            ],
            [
              "ChildLockSetting  NO",
              "ChildLockSetting  NO"
            ],
            [
              "FanTimer1Setting  YES",
              "FanTimer1Setting  YES"
            ],
            [
              "FanTimer1Setting  NO",
              "FanTimer1Setting  NO"
            ],
            [
              "FanTimer2Setting  YES",
              "FanTimer2Setting  YES"
            ],
            [
              "FanTimer2Setting  NO",
              "FanTimer2Setting  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "PackageTypeCommercialAirConditioner(indoorUnit)(exceptThoseForFacilities)",
      "message0": "PackageTypeCommercialAirConditioner(indoorUnit)(exceptThoseForFacilities) %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PackageTypeCommercialAirConditioner(indoorUnit)(exceptThoseForFacilities)",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ThermostatState  YES",
              "ThermostatState  YES"
            ],
            [
              "ThermostatState  NO",
              "ThermostatState  NO"
            ],
            [
              "CurrentFunction(automaticOperationMode)  Other",
              "CurrentFunction(automaticOperationMode)  Other"
            ],
            [
              "CurrentFunction(automaticOperationMode)  Cooling",
              "CurrentFunction(automaticOperationMode)  Cooling"
            ],
            [
              "CurrentFunction(automaticOperationMode)  Heating",
              "CurrentFunction(automaticOperationMode)  Heating"
            ],
            [
              "CurrentFunction(automaticOperationMode)  Dehumidification",
              "CurrentFunction(automaticOperationMode)  Dehumidification"
            ],
            [
              "CurrentFunction(automaticOperationMode)  Air circulation",
              "CurrentFunction(automaticOperationMode)  Air circulation"
            ],
            [
              "OperationModeSetting  Automatic",
              "OperationModeSetting  Automatic"
            ],
            [
              "OperationModeSetting  Cooling",
              "OperationModeSetting  Cooling"
            ],
            [
              "OperationModeSetting  Heating",
              "OperationModeSetting  Heating"
            ],
            [
              "OperationModeSetting  Dehumidification",
              "OperationModeSetting  Dehumidification"
            ],
            [
              "OperationModeSetting  Air circulation",
              "OperationModeSetting  Air circulation"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  Unknown",
              "PowerConsumptionRangeForIndoorUnits  Unknown"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  Less than 50W",
              "PowerConsumptionRangeForIndoorUnits  Less than 50W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  50W-100W",
              "PowerConsumptionRangeForIndoorUnits  50W-100W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  100W-150W",
              "PowerConsumptionRangeForIndoorUnits  100W-150W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  150W-200W",
              "PowerConsumptionRangeForIndoorUnits  150W-200W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  Equal to or more than 200W",
              "PowerConsumptionRangeForIndoorUnits  Equal to or more than 200W"
            ]
          ]
        }
      ]
    },
    {
      "type": "PackageTypeCommercialAirConditioner(outdoorUnit)",
      "message0": "PackageTypeCommercialAirConditioner(outdoorUnit) %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PackageTypeCommercialAirConditioner(outdoorUnit)",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SpecialState  YES",
              "SpecialState  YES"
            ],
            [
              "SpecialState  NO",
              "SpecialState  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "GasHeatPumpTypeCommercialAirConditioner(indoorUnit)",
      "message0": "GasHeatPumpTypeCommercialAirConditioner(indoorUnit) %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GasHeatPumpTypeCommercialAirConditioner(indoorUnit)",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ThermoStatus  YES",
              "ThermoStatus  YES"
            ],
            [
              "ThermoStatus  NO",
              "ThermoStatus  NO"
            ],
            [
              "OperationModeStatusDuringAutoOperation  Other",
              "OperationModeStatusDuringAutoOperation  Other"
            ],
            [
              "OperationModeStatusDuringAutoOperation  Cooling",
              "OperationModeStatusDuringAutoOperation  Cooling"
            ],
            [
              "OperationModeStatusDuringAutoOperation  Heating",
              "OperationModeStatusDuringAutoOperation  Heating"
            ],
            [
              "OperationModeStatusDuringAutoOperation  Dehumidification",
              "OperationModeStatusDuringAutoOperation  Dehumidification"
            ],
            [
              "OperationModeStatusDuringAutoOperation  Air circulation",
              "OperationModeStatusDuringAutoOperation  Air circulation"
            ],
            [
              "OperationModeSetting  Automatic",
              "OperationModeSetting  Automatic"
            ],
            [
              "OperationModeSetting  Cooling",
              "OperationModeSetting  Cooling"
            ],
            [
              "OperationModeSetting  Heating",
              "OperationModeSetting  Heating"
            ],
            [
              "OperationModeSetting  Dehumidification",
              "OperationModeSetting  Dehumidification"
            ],
            [
              "OperationModeSetting  Air circulation",
              "OperationModeSetting  Air circulation"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  Unknown",
              "PowerConsumptionRangeForIndoorUnits  Unknown"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  Less than 50W",
              "PowerConsumptionRangeForIndoorUnits  Less than 50W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  50W-100W",
              "PowerConsumptionRangeForIndoorUnits  50W-100W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  100W-150W",
              "PowerConsumptionRangeForIndoorUnits  100W-150W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  150W-200W",
              "PowerConsumptionRangeForIndoorUnits  150W-200W"
            ],
            [
              "PowerConsumptionRangeForIndoorUnits  Equal to or more than 200W",
              "PowerConsumptionRangeForIndoorUnits  Equal to or more than 200W"
            ]
          ]
        }
      ]
    },
    {
      "type": "GasHeatPumpTypeCommercialAirConditioner(outdoorUnit)",
      "message0": "GasHeatPumpTypeCommercialAirConditioner(outdoorUnit) %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GasHeatPumpTypeCommercialAirConditioner(outdoorUnit)",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "RangeHood",
      "message0": "RangeHood %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "RangeHood",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "VentilationAirFlowRateSetting  Automatic",
              "VentilationAirFlowRateSetting  Automatic"
            ],
            [
              "RangeHoodAutomaticSetting  YES",
              "RangeHoodAutomaticSetting  YES"
            ],
            [
              "RangeHoodAutomaticSetting  NO",
              "RangeHoodAutomaticSetting  NO"
            ],
            [
              "HumanDetectionStatus  YES",
              "HumanDetectionStatus  YES"
            ],
            [
              "HumanDetectionStatus  NO",
              "HumanDetectionStatus  NO"
            ],
            [
              "GasDetectionStatus  YES",
              "GasDetectionStatus  YES"
            ],
            [
              "GasDetectionStatus  NO",
              "GasDetectionStatus  NO"
            ],
            [
              "ErrorDetectionMode  Motor Error",
              "ErrorDetectionMode  Motor Error"
            ],
            [
              "ErrorDetectionMode  Current Plate Detection",
              "ErrorDetectionMode  Current Plate Detection"
            ],
            [
              "ErrorDetectionMode  Normal",
              "ErrorDetectionMode  Normal"
            ],
            [
              "ErrorDetectionMode  Other",
              "ErrorDetectionMode  Other"
            ],
            [
              "LightingOperationSetting  Lighting",
              "LightingOperationSetting  Lighting"
            ],
            [
              "LightingOperationSetting  Lights-out",
              "LightingOperationSetting  Lights-out"
            ],
            [
              "LightingOperationSetting  Flicker ",
              "LightingOperationSetting  Flicker "
            ],
            [
              "LightSourceColorSetting  Incandescent lamp color",
              "LightSourceColorSetting  Incandescent lamp color"
            ],
            [
              "LightSourceColorSetting  White",
              "LightSourceColorSetting  White"
            ],
            [
              "LightSourceColorSetting  Daylight white",
              "LightSourceColorSetting  Daylight white"
            ],
            [
              "LightSourceColorSetting  Daylight color",
              "LightSourceColorSetting  Daylight color"
            ],
            [
              "LightSourceColorSetting  Other",
              "LightSourceColorSetting  Other"
            ],
            [
              "LightingModeSetting  Automatic",
              "LightingModeSetting  Automatic"
            ],
            [
              "LightingModeSetting  Normal Lighting",
              "LightingModeSetting  Normal Lighting"
            ],
            [
              "LightingModeSetting  Color Lighting",
              "LightingModeSetting  Color Lighting"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedShade",
      "message0": "ElectricallyOperatedShade %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedShade",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OpenCloseSetting  Open",
              "OpenCloseSetting  Open"
            ],
            [
              "OpenCloseSetting  Close",
              "OpenCloseSetting  Close"
            ],
            [
              "BlindOpenCloseSpeedSetting  Low",
              "BlindOpenCloseSpeedSetting  Low"
            ],
            [
              "BlindOpenCloseSpeedSetting  Middle",
              "BlindOpenCloseSpeedSetting  Middle"
            ],
            [
              "BlindOpenCloseSpeedSetting  High",
              "BlindOpenCloseSpeedSetting  High"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedBlindShade",
      "message0": "ElectricallyOperatedBlindShade %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedBlindShade",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "TimerOperationSetting  ON",
              "TimerOperationSetting  ON"
            ],
            [
              "TimerOperationSetting  OFF",
              "TimerOperationSetting  OFF"
            ],
            [
              "WindDetectionStatus  YES",
              "WindDetectionStatus  YES"
            ],
            [
              "WindDetectionStatus  NO",
              "WindDetectionStatus  NO"
            ],
            [
              "SunlightDetectionStatus  YES",
              "SunlightDetectionStatus  YES"
            ],
            [
              "SunlightDetectionStatus  NO",
              "SunlightDetectionStatus  NO"
            ],
            [
              "Opening(extention)SpeedSetting  Low",
              "Opening(extention)SpeedSetting  Low"
            ],
            [
              "Opening(extention)SpeedSetting  Middle",
              "Opening(extention)SpeedSetting  Middle"
            ],
            [
              "Opening(extention)SpeedSetting  High",
              "Opening(extention)SpeedSetting  High"
            ],
            [
              "Closing(retraction)SpeedSetting  Low",
              "Closing(retraction)SpeedSetting  Low"
            ],
            [
              "Closing(retraction)SpeedSetting  Middle",
              "Closing(retraction)SpeedSetting  Middle"
            ],
            [
              "Closing(retraction)SpeedSetting  High",
              "Closing(retraction)SpeedSetting  High"
            ],
            [
              "AutomaticOperationSetting  ON",
              "AutomaticOperationSetting  ON"
            ],
            [
              "AutomaticOperationSetting  OFF",
              "AutomaticOperationSetting  OFF"
            ],
            [
              "OpenClose(extensionRetraction)Setting  Open",
              "OpenClose(extensionRetraction)Setting  Open"
            ],
            [
              "OpenClose(extensionRetraction)Setting  Close",
              "OpenClose(extensionRetraction)Setting  Close"
            ],
            [
              "OpenClose(extensionRetraction)Setting  Stop",
              "OpenClose(extensionRetraction)Setting  Stop"
            ],
            [
              "OpenClose(extensionRetraction)SpeedSetting  Low",
              "OpenClose(extensionRetraction)SpeedSetting  Low"
            ],
            [
              "OpenClose(extensionRetraction)SpeedSetting  Middle",
              "OpenClose(extensionRetraction)SpeedSetting  Middle"
            ],
            [
              "OpenClose(extensionRetraction)SpeedSetting  High",
              "OpenClose(extensionRetraction)SpeedSetting  High"
            ],
            [
              "ElectricLockSetting  Lock",
              "ElectricLockSetting  Lock"
            ],
            [
              "ElectricLockSetting  Unlock",
              "ElectricLockSetting  Unlock"
            ],
            [
              "RemoteOperationSettingStatus  ON(permitted)",
              "RemoteOperationSettingStatus  ON(permitted)"
            ],
            [
              "RemoteOperationSettingStatus  OFF(prohibited)",
              "RemoteOperationSettingStatus  OFF(prohibited)"
            ],
            [
              "SelectiveOpening(extention)OperationSetting  Degree-of-setting position: Open",
              "SelectiveOpening(extention)OperationSetting  Degree-of-setting position: Open"
            ],
            [
              "SelectiveOpening(extention)OperationSetting  Operation time setting value: Open",
              "SelectiveOpening(extention)OperationSetting  Operation time setting value: Open"
            ],
            [
              "SelectiveOpening(extention)OperationSetting  Operation time setting value: Close",
              "SelectiveOpening(extention)OperationSetting  Operation time setting value: Close"
            ],
            [
              "SelectiveOpening(extention)OperationSetting  Local setting position",
              "SelectiveOpening(extention)OperationSetting  Local setting position"
            ],
            [
              "OpenClosed(extensionRetraction)Status  Fully open",
              "OpenClosed(extensionRetraction)Status  Fully open"
            ],
            [
              "OpenClosed(extensionRetraction)Status  Fully closed",
              "OpenClosed(extensionRetraction)Status  Fully closed"
            ],
            [
              "OpenClosed(extensionRetraction)Status  Open",
              "OpenClosed(extensionRetraction)Status  Open"
            ],
            [
              "OpenClosed(extensionRetraction)Status  Closed",
              "OpenClosed(extensionRetraction)Status  Closed"
            ],
            [
              "OpenClosed(extensionRetraction)Status  Stopped halfway",
              "OpenClosed(extensionRetraction)Status  Stopped halfway"
            ],
            [
              "OneTimeOpening(extension)SpeedSetting  Low",
              "OneTimeOpening(extension)SpeedSetting  Low"
            ],
            [
              "OneTimeOpening(extension)SpeedSetting  Middle",
              "OneTimeOpening(extension)SpeedSetting  Middle"
            ],
            [
              "OneTimeOpening(extension)SpeedSetting  High",
              "OneTimeOpening(extension)SpeedSetting  High"
            ],
            [
              "OneTimeOpening(extension)SpeedSetting  None",
              "OneTimeOpening(extension)SpeedSetting  None"
            ],
            [
              "OneTimeClosing(retraction)SpeedSetting  Low",
              "OneTimeClosing(retraction)SpeedSetting  Low"
            ],
            [
              "OneTimeClosing(retraction)SpeedSetting  Middle",
              "OneTimeClosing(retraction)SpeedSetting  Middle"
            ],
            [
              "OneTimeClosing(retraction)SpeedSetting  High",
              "OneTimeClosing(retraction)SpeedSetting  High"
            ],
            [
              "OneTimeClosing(retraction)SpeedSetting  None",
              "OneTimeClosing(retraction)SpeedSetting  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedShutter",
      "message0": "ElectricallyOperatedShutter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedShutter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "TimerOperationSetting  ON",
              "TimerOperationSetting  ON"
            ],
            [
              "TimerOperationSetting  OFF",
              "TimerOperationSetting  OFF"
            ],
            [
              "OpeningSpeedSetting  Low",
              "OpeningSpeedSetting  Low"
            ],
            [
              "OpeningSpeedSetting  Middle",
              "OpeningSpeedSetting  Middle"
            ],
            [
              "OpeningSpeedSetting  High",
              "OpeningSpeedSetting  High"
            ],
            [
              "ClosingSpeedSetting  Low",
              "ClosingSpeedSetting  Low"
            ],
            [
              "ClosingSpeedSetting  Middle",
              "ClosingSpeedSetting  Middle"
            ],
            [
              "ClosingSpeedSetting  High",
              "ClosingSpeedSetting  High"
            ],
            [
              "OpeningClosingSpeedSetting  Low",
              "OpeningClosingSpeedSetting  Low"
            ],
            [
              "OpeningClosingSpeedSetting  Middle",
              "OpeningClosingSpeedSetting  Middle"
            ],
            [
              "OpeningClosingSpeedSetting  High",
              "OpeningClosingSpeedSetting  High"
            ],
            [
              "ElectricLockSetting  Lock",
              "ElectricLockSetting  Lock"
            ],
            [
              "ElectricLockSetting  Unlock",
              "ElectricLockSetting  Unlock"
            ],
            [
              "OpenCloseSetting2  Open",
              "OpenCloseSetting2  Open"
            ],
            [
              "OpenCloseSetting2  Close",
              "OpenCloseSetting2  Close"
            ],
            [
              "RemoteOperationSettingStatus  ON(permitted)",
              "RemoteOperationSettingStatus  ON(permitted)"
            ],
            [
              "RemoteOperationSettingStatus  OFF(prohibited)",
              "RemoteOperationSettingStatus  OFF(prohibited)"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open",
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Local setting position",
              "SelectiveDegreeOfOpeningSetting  Local setting position"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Slit degree-of-opning setting",
              "SelectiveDegreeOfOpeningSetting  Slit degree-of-opning setting"
            ],
            [
              "OpenClosedStatus  Fully open",
              "OpenClosedStatus  Fully open"
            ],
            [
              "OpenClosedStatus  Fully closed",
              "OpenClosedStatus  Fully closed"
            ],
            [
              "OpenClosedStatus  Opening",
              "OpenClosedStatus  Opening"
            ],
            [
              "OpenClosedStatus  Closing",
              "OpenClosedStatus  Closing"
            ],
            [
              "OpenClosedStatus  Stopped halfway",
              "OpenClosedStatus  Stopped halfway"
            ],
            [
              "OneTimeOpeningSpeedSetting  Low",
              "OneTimeOpeningSpeedSetting  Low"
            ],
            [
              "OneTimeOpeningSpeedSetting  Middle",
              "OneTimeOpeningSpeedSetting  Middle"
            ],
            [
              "OneTimeOpeningSpeedSetting  High",
              "OneTimeOpeningSpeedSetting  High"
            ],
            [
              "OneTimeOpeningSpeedSetting  None",
              "OneTimeOpeningSpeedSetting  None"
            ],
            [
              "OneTimeClosingSpeedSetting  Low",
              "OneTimeClosingSpeedSetting  Low"
            ],
            [
              "OneTimeClosingSpeedSetting  Middle",
              "OneTimeClosingSpeedSetting  Middle"
            ],
            [
              "OneTimeClosingSpeedSetting  High",
              "OneTimeClosingSpeedSetting  High"
            ],
            [
              "OneTimeClosingSpeedSetting  None",
              "OneTimeClosingSpeedSetting  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedRainSlidingDoorShutter",
      "message0": "ElectricallyOperatedRainSlidingDoorShutter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedRainSlidingDoorShutter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OpenCloseSetting1  Open",
              "OpenCloseSetting1  Open"
            ],
            [
              "OpenCloseSetting1  Close",
              "OpenCloseSetting1  Close"
            ],
            [
              "OpenCloseSetting1  Stop",
              "OpenCloseSetting1  Stop"
            ],
            [
              "OpeningClosingSpeedSetting  Low",
              "OpeningClosingSpeedSetting  Low"
            ],
            [
              "OpeningClosingSpeedSetting  Middle",
              "OpeningClosingSpeedSetting  Middle"
            ],
            [
              "OpeningClosingSpeedSetting  High",
              "OpeningClosingSpeedSetting  High"
            ],
            [
              "ElectricLockSetting  Lock",
              "ElectricLockSetting  Lock"
            ],
            [
              "ElectricLockSetting  Unlock",
              "ElectricLockSetting  Unlock"
            ],
            [
              "OpenCloseSetting2  Open",
              "OpenCloseSetting2  Open"
            ],
            [
              "OpenCloseSetting2  Close",
              "OpenCloseSetting2  Close"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedRainSlidingDoorShutter",
      "message0": "ElectricallyOperatedRainSlidingDoorShutter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedRainSlidingDoorShutter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "TimerOperationSetting  ON",
              "TimerOperationSetting  ON"
            ],
            [
              "TimerOperationSetting  OFF",
              "TimerOperationSetting  OFF"
            ],
            [
              "OpeningSpeedSetting  Low",
              "OpeningSpeedSetting  Low"
            ],
            [
              "OpeningSpeedSetting  Middle",
              "OpeningSpeedSetting  Middle"
            ],
            [
              "OpeningSpeedSetting  High",
              "OpeningSpeedSetting  High"
            ],
            [
              "ClosingSpeedSetting  Low",
              "ClosingSpeedSetting  Low"
            ],
            [
              "ClosingSpeedSetting  Middle",
              "ClosingSpeedSetting  Middle"
            ],
            [
              "ClosingSpeedSetting  High",
              "ClosingSpeedSetting  High"
            ],
            [
              "OpenCloseSetting  Open",
              "OpenCloseSetting  Open"
            ],
            [
              "OpenCloseSetting  Close",
              "OpenCloseSetting  Close"
            ],
            [
              "OpenCloseSetting  Stop",
              "OpenCloseSetting  Stop"
            ],
            [
              "OpeningClosingSpeedSetting  Low",
              "OpeningClosingSpeedSetting  Low"
            ],
            [
              "OpeningClosingSpeedSetting  Middle",
              "OpeningClosingSpeedSetting  Middle"
            ],
            [
              "OpeningClosingSpeedSetting  High",
              "OpeningClosingSpeedSetting  High"
            ],
            [
              "ElectricLockSetting  Lock",
              "ElectricLockSetting  Lock"
            ],
            [
              "ElectricLockSetting  Unlock",
              "ElectricLockSetting  Unlock"
            ],
            [
              "RemoteOperationSettingStatus  ON(permitted)",
              "RemoteOperationSettingStatus  ON(permitted)"
            ],
            [
              "RemoteOperationSettingStatus  OFF(prohibited)",
              "RemoteOperationSettingStatus  OFF(prohibited)"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open",
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Local setting position",
              "SelectiveDegreeOfOpeningSetting  Local setting position"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Slit degree-of-opning setting",
              "SelectiveDegreeOfOpeningSetting  Slit degree-of-opning setting"
            ],
            [
              "OpenClosedStatus  Fully open",
              "OpenClosedStatus  Fully open"
            ],
            [
              "OpenClosedStatus  Fully closed",
              "OpenClosedStatus  Fully closed"
            ],
            [
              "OpenClosedStatus  Opening",
              "OpenClosedStatus  Opening"
            ],
            [
              "OpenClosedStatus  Closing",
              "OpenClosedStatus  Closing"
            ],
            [
              "OpenClosedStatus  Stopped halfway",
              "OpenClosedStatus  Stopped halfway"
            ],
            [
              "OneTimeOpeningSpeedSetting  Low",
              "OneTimeOpeningSpeedSetting  Low"
            ],
            [
              "OneTimeOpeningSpeedSetting  Middle",
              "OneTimeOpeningSpeedSetting  Middle"
            ],
            [
              "OneTimeOpeningSpeedSetting  High",
              "OneTimeOpeningSpeedSetting  High"
            ],
            [
              "OneTimeOpeningSpeedSetting  None",
              "OneTimeOpeningSpeedSetting  None"
            ],
            [
              "OneTimeClosingSpeedSetting  Low",
              "OneTimeClosingSpeedSetting  Low"
            ],
            [
              "OneTimeClosingSpeedSetting  Middle",
              "OneTimeClosingSpeedSetting  Middle"
            ],
            [
              "OneTimeClosingSpeedSetting  High",
              "OneTimeClosingSpeedSetting  High"
            ],
            [
              "OneTimeClosingSpeedSetting  None",
              "OneTimeClosingSpeedSetting  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedGate",
      "message0": "ElectricallyOperatedGate %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedGate",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OpeningSpeedSetting  Low",
              "OpeningSpeedSetting  Low"
            ],
            [
              "OpeningSpeedSetting  Middle",
              "OpeningSpeedSetting  Middle"
            ],
            [
              "OpeningSpeedSetting  High",
              "OpeningSpeedSetting  High"
            ],
            [
              "ClosingSpeedSetting  Low",
              "ClosingSpeedSetting  Low"
            ],
            [
              "ClosingSpeedSetting  Middle",
              "ClosingSpeedSetting  Middle"
            ],
            [
              "ClosingSpeedSetting  High",
              "ClosingSpeedSetting  High"
            ],
            [
              "OpenCloseSetting  Open",
              "OpenCloseSetting  Open"
            ],
            [
              "OpenCloseSetting  Close",
              "OpenCloseSetting  Close"
            ],
            [
              "OpenCloseSetting  Stop",
              "OpenCloseSetting  Stop"
            ],
            [
              "OpeningClosingSpeedSetting  Low",
              "OpeningClosingSpeedSetting  Low"
            ],
            [
              "OpeningClosingSpeedSetting  Middle",
              "OpeningClosingSpeedSetting  Middle"
            ],
            [
              "OpeningClosingSpeedSetting  High",
              "OpeningClosingSpeedSetting  High"
            ],
            [
              "ElectricLockSetting  Lock",
              "ElectricLockSetting  Lock"
            ],
            [
              "ElectricLockSetting  Unlock",
              "ElectricLockSetting  Unlock"
            ],
            [
              "RemoteOperationSettingStatus  ON(permitted)",
              "RemoteOperationSettingStatus  ON(permitted)"
            ],
            [
              "RemoteOperationSettingStatus  OFF(prohibited)",
              "RemoteOperationSettingStatus  OFF(prohibited)"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open",
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Local setting position",
              "SelectiveDegreeOfOpeningSetting  Local setting position"
            ],
            [
              "OpenClosedStatus  Fully open",
              "OpenClosedStatus  Fully open"
            ],
            [
              "OpenClosedStatus  Fully closed",
              "OpenClosedStatus  Fully closed"
            ],
            [
              "OpenClosedStatus  Opening",
              "OpenClosedStatus  Opening"
            ],
            [
              "OpenClosedStatus  Closing",
              "OpenClosedStatus  Closing"
            ],
            [
              "OpenClosedStatus  Stopped halfway",
              "OpenClosedStatus  Stopped halfway"
            ],
            [
              "OneTimeOpeningSpeedSetting  Low",
              "OneTimeOpeningSpeedSetting  Low"
            ],
            [
              "OneTimeOpeningSpeedSetting  Middle",
              "OneTimeOpeningSpeedSetting  Middle"
            ],
            [
              "OneTimeOpeningSpeedSetting  High",
              "OneTimeOpeningSpeedSetting  High"
            ],
            [
              "OneTimeOpeningSpeedSetting  None",
              "OneTimeOpeningSpeedSetting  None"
            ],
            [
              "OneTimeClosingSpeedSetting  Low",
              "OneTimeClosingSpeedSetting  Low"
            ],
            [
              "OneTimeClosingSpeedSetting  Middle",
              "OneTimeClosingSpeedSetting  Middle"
            ],
            [
              "OneTimeClosingSpeedSetting  High",
              "OneTimeClosingSpeedSetting  High"
            ],
            [
              "OneTimeClosingSpeedSetting  None",
              "OneTimeClosingSpeedSetting  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricallyOperatedWindow",
      "message0": "ElectricallyOperatedWindow %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricallyOperatedWindow",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "TimerOperationSetting  ON",
              "TimerOperationSetting  ON"
            ],
            [
              "TimerOperationSetting  OFF",
              "TimerOperationSetting  OFF"
            ],
            [
              "RegisteredTemperatureDetectionStatus  YES",
              "RegisteredTemperatureDetectionStatus  YES"
            ],
            [
              "RegisteredTemperatureDetectionStatus  NO",
              "RegisteredTemperatureDetectionStatus  NO"
            ],
            [
              "RainDetectionStatus  YES",
              "RainDetectionStatus  YES"
            ],
            [
              "RainDetectionStatus  NO",
              "RainDetectionStatus  NO"
            ],
            [
              "OpeningSpeedSetting  Low",
              "OpeningSpeedSetting  Low"
            ],
            [
              "OpeningSpeedSetting  Middle",
              "OpeningSpeedSetting  Middle"
            ],
            [
              "OpeningSpeedSetting  High",
              "OpeningSpeedSetting  High"
            ],
            [
              "ClosingSpeedSetting  Low",
              "ClosingSpeedSetting  Low"
            ],
            [
              "ClosingSpeedSetting  Middle",
              "ClosingSpeedSetting  Middle"
            ],
            [
              "ClosingSpeedSetting  High",
              "ClosingSpeedSetting  High"
            ],
            [
              "AutomaticOperationSetting  ON",
              "AutomaticOperationSetting  ON"
            ],
            [
              "AutomaticOperationSetting  OFF",
              "AutomaticOperationSetting  OFF"
            ],
            [
              "OpenCloseSetting  Open",
              "OpenCloseSetting  Open"
            ],
            [
              "OpenCloseSetting  Close",
              "OpenCloseSetting  Close"
            ],
            [
              "OpenCloseSetting  Stop",
              "OpenCloseSetting  Stop"
            ],
            [
              "OpeningClosingSpeedSetting  Low",
              "OpeningClosingSpeedSetting  Low"
            ],
            [
              "OpeningClosingSpeedSetting  Middle",
              "OpeningClosingSpeedSetting  Middle"
            ],
            [
              "OpeningClosingSpeedSetting  High",
              "OpeningClosingSpeedSetting  High"
            ],
            [
              "ElectricLockSetting  Lock",
              "ElectricLockSetting  Lock"
            ],
            [
              "ElectricLockSetting  Unlock",
              "ElectricLockSetting  Unlock"
            ],
            [
              "RemoteOperationSettingStatus  ON(permitted)",
              "RemoteOperationSettingStatus  ON(permitted)"
            ],
            [
              "RemoteOperationSettingStatus  OFF(prohibited)",
              "RemoteOperationSettingStatus  OFF(prohibited)"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open",
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Local setting position",
              "SelectiveDegreeOfOpeningSetting  Local setting position"
            ],
            [
              "OpenClosedStatus  Fully open",
              "OpenClosedStatus  Fully open"
            ],
            [
              "OpenClosedStatus  Fully closed",
              "OpenClosedStatus  Fully closed"
            ],
            [
              "OpenClosedStatus  Opening",
              "OpenClosedStatus  Opening"
            ],
            [
              "OpenClosedStatus  Closing",
              "OpenClosedStatus  Closing"
            ],
            [
              "OpenClosedStatus  Stopped halfway",
              "OpenClosedStatus  Stopped halfway"
            ],
            [
              "OneTimeOpeningSpeedSetting  Low",
              "OneTimeOpeningSpeedSetting  Low"
            ],
            [
              "OneTimeOpeningSpeedSetting  Middle",
              "OneTimeOpeningSpeedSetting  Middle"
            ],
            [
              "OneTimeOpeningSpeedSetting  High",
              "OneTimeOpeningSpeedSetting  High"
            ],
            [
              "OneTimeOpeningSpeedSetting  None",
              "OneTimeOpeningSpeedSetting  None"
            ],
            [
              "OneTimeClosingSpeedSetting  Low",
              "OneTimeClosingSpeedSetting  Low"
            ],
            [
              "OneTimeClosingSpeedSetting  Middle",
              "OneTimeClosingSpeedSetting  Middle"
            ],
            [
              "OneTimeClosingSpeedSetting  High",
              "OneTimeClosingSpeedSetting  High"
            ],
            [
              "OneTimeClosingSpeedSetting  None",
              "OneTimeClosingSpeedSetting  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "AutomaticallyOperatedEntranceDoorSlidingDoor",
      "message0": "AutomaticallyOperatedEntranceDoorSlidingDoor %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "AutomaticallyOperatedEntranceDoorSlidingDoor",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OpeningSpeedSetting  Low",
              "OpeningSpeedSetting  Low"
            ],
            [
              "OpeningSpeedSetting  Middle",
              "OpeningSpeedSetting  Middle"
            ],
            [
              "OpeningSpeedSetting  High",
              "OpeningSpeedSetting  High"
            ],
            [
              "ClosingSpeedSetting  Low",
              "ClosingSpeedSetting  Low"
            ],
            [
              "ClosingSpeedSetting  Middle",
              "ClosingSpeedSetting  Middle"
            ],
            [
              "ClosingSpeedSetting  High",
              "ClosingSpeedSetting  High"
            ],
            [
              "OpenCloseSetting  Open",
              "OpenCloseSetting  Open"
            ],
            [
              "OpenCloseSetting  Close",
              "OpenCloseSetting  Close"
            ],
            [
              "OpenCloseSetting  Stop",
              "OpenCloseSetting  Stop"
            ],
            [
              "OpeningClosingSpeedSetting  Low",
              "OpeningClosingSpeedSetting  Low"
            ],
            [
              "OpeningClosingSpeedSetting  Middle",
              "OpeningClosingSpeedSetting  Middle"
            ],
            [
              "OpeningClosingSpeedSetting  High",
              "OpeningClosingSpeedSetting  High"
            ],
            [
              "RemoteOperationSettingStatus  ON(permitted)",
              "RemoteOperationSettingStatus  ON(permitted)"
            ],
            [
              "RemoteOperationSettingStatus  OFF(prohibited)",
              "RemoteOperationSettingStatus  OFF(prohibited)"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open",
              "SelectiveDegreeOfOpeningSetting  Degree-of-setting position: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Open"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close",
              "SelectiveDegreeOfOpeningSetting  Operation time setting value: Close"
            ],
            [
              "SelectiveDegreeOfOpeningSetting  Local setting position",
              "SelectiveDegreeOfOpeningSetting  Local setting position"
            ],
            [
              "OpenClosedStatus  Fully open",
              "OpenClosedStatus  Fully open"
            ],
            [
              "OpenClosedStatus  Fully closed",
              "OpenClosedStatus  Fully closed"
            ],
            [
              "OpenClosedStatus  Opening",
              "OpenClosedStatus  Opening"
            ],
            [
              "OpenClosedStatus  Closing",
              "OpenClosedStatus  Closing"
            ],
            [
              "OpenClosedStatus  Stopped halfway",
              "OpenClosedStatus  Stopped halfway"
            ],
            [
              "OneTimeOpeningSpeedSetting  Low",
              "OneTimeOpeningSpeedSetting  Low"
            ],
            [
              "OneTimeOpeningSpeedSetting  Middle",
              "OneTimeOpeningSpeedSetting  Middle"
            ],
            [
              "OneTimeOpeningSpeedSetting  High",
              "OneTimeOpeningSpeedSetting  High"
            ],
            [
              "OneTimeOpeningSpeedSetting  None",
              "OneTimeOpeningSpeedSetting  None"
            ],
            [
              "OneTimeClosingSpeedSetting  Low",
              "OneTimeClosingSpeedSetting  Low"
            ],
            [
              "OneTimeClosingSpeedSetting  Middle",
              "OneTimeClosingSpeedSetting  Middle"
            ],
            [
              "OneTimeClosingSpeedSetting  High",
              "OneTimeClosingSpeedSetting  High"
            ],
            [
              "OneTimeClosingSpeedSetting  None",
              "OneTimeClosingSpeedSetting  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "GardenSprinkler",
      "message0": "GardenSprinkler %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GardenSprinkler",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SprinkleValveOpenCloseSetting  automatic ON",
              "SprinkleValveOpenCloseSetting  automatic ON"
            ],
            [
              "SprinkleValveOpenCloseSetting  manual ON",
              "SprinkleValveOpenCloseSetting  manual ON"
            ],
            [
              "SprinkleValveOpenCloseSetting  manual OFF",
              "SprinkleValveOpenCloseSetting  manual OFF"
            ],
            [
              "SprinkleIntervalSetting  OFF",
              "SprinkleIntervalSetting  OFF"
            ],
            [
              "SprinkleIntervalSetting  daily",
              "SprinkleIntervalSetting  daily"
            ],
            [
              "SprinkleIntervalSetting  every other day",
              "SprinkleIntervalSetting  every other day"
            ],
            [
              "SprinkleIntervalSetting  every 3 days",
              "SprinkleIntervalSetting  every 3 days"
            ],
            [
              "SprinkleIntervalSetting  once a week",
              "SprinkleIntervalSetting  once a week"
            ],
            [
              "NumberOfSprinklesSetting  first ON",
              "NumberOfSprinklesSetting  first ON"
            ],
            [
              "NumberOfSprinklesSetting  second ON",
              "NumberOfSprinklesSetting  second ON"
            ],
            [
              "NumberOfSprinklesSetting  both ON",
              "NumberOfSprinklesSetting  both ON"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricWaterHeater",
      "message0": "ElectricWaterHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricWaterHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "AutomaticWaterTemperatureControlSetting  ON",
              "AutomaticWaterTemperatureControlSetting  ON"
            ],
            [
              "AutomaticWaterTemperatureControlSetting  OFF",
              "AutomaticWaterTemperatureControlSetting  OFF"
            ],
            [
              "WaterHeatingTemperatureSetting  Undefined",
              "WaterHeatingTemperatureSetting  Undefined"
            ],
            [
              "TankOperationModeSetting  Standard",
              "TankOperationModeSetting  Standard"
            ],
            [
              "TankOperationModeSetting  Saving",
              "TankOperationModeSetting  Saving"
            ],
            [
              "TankOperationModeSetting  Extra",
              "TankOperationModeSetting  Extra"
            ],
            [
              "HotWaterSupplyStatus  YES",
              "HotWaterSupplyStatus  YES"
            ],
            [
              "HotWaterSupplyStatus  NO",
              "HotWaterSupplyStatus  NO"
            ],
            [
              "ParticipationInEnergyShift  Participation",
              "ParticipationInEnergyShift  Participation"
            ],
            [
              "ParticipationInEnergyShift  Non Participation",
              "ParticipationInEnergyShift  Non Participation"
            ],
            [
              "MuteSetting  ON",
              "MuteSetting  ON"
            ],
            [
              "MuteSetting  OFF",
              "MuteSetting  OFF"
            ],
            [
              "AutomaticBathWaterHeatingModeSetting  ON",
              "AutomaticBathWaterHeatingModeSetting  ON"
            ],
            [
              "AutomaticBathWaterHeatingModeSetting  OFF",
              "AutomaticBathWaterHeatingModeSetting  OFF"
            ],
            [
              "ManualBathReheatingOperationSetting  ON",
              "ManualBathReheatingOperationSetting  ON"
            ],
            [
              "ManualBathReheatingOperationSetting  OFF",
              "ManualBathReheatingOperationSetting  OFF"
            ],
            [
              "BathroomPriporitySetting  ON",
              "BathroomPriporitySetting  ON"
            ],
            [
              "BathroomPriporitySetting  OFF",
              "BathroomPriporitySetting  OFF"
            ],
            [
              "BathOperationStatusMonitor  Running Hot Water",
              "BathOperationStatusMonitor  Running Hot Water"
            ],
            [
              "BathOperationStatusMonitor  No Operation",
              "BathOperationStatusMonitor  No Operation"
            ],
            [
              "BathOperationStatusMonitor  Keeping Temperature",
              "BathOperationStatusMonitor  Keeping Temperature"
            ]
          ]
        }
      ]
    },
    {
      "type": "BidetQuippedToilet(withElectricallyWarmedSeat)",
      "message0": "BidetQuippedToilet(withElectricallyWarmedSeat) %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BidetQuippedToilet(withElectricallyWarmedSeat)",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "HeaterSettingOfToiletSeat  ON",
              "HeaterSettingOfToiletSeat  ON"
            ],
            [
              "HeaterSettingOfToiletSeat  OFF",
              "HeaterSettingOfToiletSeat  OFF"
            ],
            [
              "TemporalHaltSettingOfToiletSeat  Continuous",
              "TemporalHaltSettingOfToiletSeat  Continuous"
            ],
            [
              "TemporalHaltSettingOfToiletSeat  Once",
              "TemporalHaltSettingOfToiletSeat  Once"
            ],
            [
              "TemporalHaltSettingOfToiletSeat  No setting",
              "TemporalHaltSettingOfToiletSeat  No setting"
            ],
            [
              "TemperatureLevelSettingOfRoomHeating  Low",
              "TemperatureLevelSettingOfRoomHeating  Low"
            ],
            [
              "TemperatureLevelSettingOfRoomHeating  Medium",
              "TemperatureLevelSettingOfRoomHeating  Medium"
            ],
            [
              "TemperatureLevelSettingOfRoomHeating  High",
              "TemperatureLevelSettingOfRoomHeating  High"
            ],
            [
              "RoomHeatingSetting  ON",
              "RoomHeatingSetting  ON"
            ],
            [
              "RoomHeatingSetting  OFF",
              "RoomHeatingSetting  OFF"
            ],
            [
              "RoomHeatingSetting  Timer mode",
              "RoomHeatingSetting  Timer mode"
            ],
            [
              "RoomHeatingStatus  YES",
              "RoomHeatingStatus  YES"
            ],
            [
              "RoomHeatingStatus  NO",
              "RoomHeatingStatus  NO"
            ],
            [
              "SpecialOperationModeSetting  No setting",
              "SpecialOperationModeSetting  No setting"
            ],
            [
              "SpecialOperationModeSetting  Over-cool prevention",
              "SpecialOperationModeSetting  Over-cool prevention"
            ],
            [
              "HumanDetectionStatus  YES",
              "HumanDetectionStatus  YES"
            ],
            [
              "HumanDetectionStatus  NO",
              "HumanDetectionStatus  NO"
            ],
            [
              "SeatingDetectionStatus  YES",
              "SeatingDetectionStatus  YES"
            ],
            [
              "SeatingDetectionStatus  NO",
              "SeatingDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricKey",
      "message0": "ElectricKey %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricKey",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "LockSetting1  Lock",
              "LockSetting1  Lock"
            ],
            [
              "LockSetting1  Unlock",
              "LockSetting1  Unlock"
            ],
            [
              "LockSetting2  Lock",
              "LockSetting2  Lock"
            ],
            [
              "LockSetting2  Unlock",
              "LockSetting2  Unlock"
            ],
            [
              "LockStatusOfDoorGuard  Lock",
              "LockStatusOfDoorGuard  Lock"
            ],
            [
              "LockStatusOfDoorGuard  Unlock",
              "LockStatusOfDoorGuard  Unlock"
            ],
            [
              "DoorOpenCloseStatus  Open",
              "DoorOpenCloseStatus  Open"
            ],
            [
              "DoorOpenCloseStatus  Close",
              "DoorOpenCloseStatus  Close"
            ],
            [
              "OccupantNonOccupantStatus  occupant",
              "OccupantNonOccupantStatus  occupant"
            ],
            [
              "OccupantNonOccupantStatus  non-occupant",
              "OccupantNonOccupantStatus  non-occupant"
            ],
            [
              "AlarmStatus  Normal(no alarm)",
              "AlarmStatus  Normal(no alarm)"
            ],
            [
              "AlarmStatus  break open",
              "AlarmStatus  break open"
            ],
            [
              "AlarmStatus  door open",
              "AlarmStatus  door open"
            ],
            [
              "AlarmStatus  manual unlocked",
              "AlarmStatus  manual unlocked"
            ],
            [
              "AlarmStatus  tampered",
              "AlarmStatus  tampered"
            ],
            [
              "AutoLockModeSetting  ON",
              "AutoLockModeSetting  ON"
            ],
            [
              "AutoLockModeSetting  OFF",
              "AutoLockModeSetting  OFF"
            ],
            [
              "BatteryLevel  Ordinary level",
              "BatteryLevel  Ordinary level"
            ],
            [
              "BatteryLevel  Notification of battery replacement",
              "BatteryLevel  Notification of battery replacement"
            ]
          ]
        }
      ]
    },
    {
      "type": "InstantaneousWaterHeater",
      "message0": "InstantaneousWaterHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "InstantaneousWaterHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "HotWaterHeatingStatus  YES",
              "HotWaterHeatingStatus  YES"
            ],
            [
              "HotWaterHeatingStatus  NO",
              "HotWaterHeatingStatus  NO"
            ],
            [
              "HotWaterWarmerSetting  ON",
              "HotWaterWarmerSetting  ON"
            ],
            [
              "HotWaterWarmerSetting  OFF",
              "HotWaterWarmerSetting  OFF"
            ],
            [
              "MuteSetting  ON",
              "MuteSetting  ON"
            ],
            [
              "MuteSetting  OFF",
              "MuteSetting  OFF"
            ],
            [
              "BathWaterHeaterStatus  YES",
              "BathWaterHeaterStatus  YES"
            ],
            [
              "BathWaterHeaterStatus  NO",
              "BathWaterHeaterStatus  NO"
            ],
            [
              "BathAutoModeSetting  ON",
              "BathAutoModeSetting  ON"
            ],
            [
              "BathAutoModeSetting  OFF",
              "BathAutoModeSetting  OFF"
            ],
            [
              "BathAdditionalBoilUpOperationSetting  ON",
              "BathAdditionalBoilUpOperationSetting  ON"
            ],
            [
              "BathAdditionalBoilUpOperationSetting  OFF",
              "BathAdditionalBoilUpOperationSetting  OFF"
            ],
            [
              "BathHotWaterAddingOperationSetting  ON",
              "BathHotWaterAddingOperationSetting  ON"
            ],
            [
              "BathHotWaterAddingOperationSetting  OFF",
              "BathHotWaterAddingOperationSetting  OFF"
            ],
            [
              "BathWaterTemperatureLoweringOperationSetting  ON",
              "BathWaterTemperatureLoweringOperationSetting  ON"
            ],
            [
              "BathWaterTemperatureLoweringOperationSetting  OFF",
              "BathWaterTemperatureLoweringOperationSetting  OFF"
            ],
            [
              "ShowerHotWaterSupplyStatus  YES",
              "ShowerHotWaterSupplyStatus  YES"
            ],
            [
              "ShowerHotWaterSupplyStatus  NO",
              "ShowerHotWaterSupplyStatus  NO"
            ],
            [
              "KitchenHotWaterSupplyStatus  YES",
              "KitchenHotWaterSupplyStatus  YES"
            ],
            [
              "KitchenHotWaterSupplyStatus  NO",
              "KitchenHotWaterSupplyStatus  NO"
            ],
            [
              "HotWaterWarmerOnTimerReservationSetting  ON",
              "HotWaterWarmerOnTimerReservationSetting  ON"
            ],
            [
              "HotWaterWarmerOnTimerReservationSetting  OFF",
              "HotWaterWarmerOnTimerReservationSetting  OFF"
            ],
            [
              "BathOperationStatusMonitor  Running Hot Water",
              "BathOperationStatusMonitor  Running Hot Water"
            ],
            [
              "BathOperationStatusMonitor  No Operation",
              "BathOperationStatusMonitor  No Operation"
            ],
            [
              "BathOperationStatusMonitor  Keeping Temperature",
              "BathOperationStatusMonitor  Keeping Temperature"
            ]
          ]
        }
      ]
    },
    {
      "type": "BathroomHeaterAndDryer",
      "message0": "BathroomHeaterAndDryer %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BathroomHeaterAndDryer",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting1  ON",
              "OnTimerSetting1  ON"
            ],
            [
              "OnTimerSetting1  OFF",
              "OnTimerSetting1  OFF"
            ],
            [
              "OffTimerSetting  ON",
              "OffTimerSetting  ON"
            ],
            [
              "OffTimerSetting  OFF",
              "OffTimerSetting  OFF"
            ],
            [
              "VentilationOperationSetting  Automatic",
              "VentilationOperationSetting  Automatic"
            ],
            [
              "VentilationOperationSetting  Standard",
              "VentilationOperationSetting  Standard"
            ],
            [
              "BathroomHeaterOperationSetting  Automatic",
              "BathroomHeaterOperationSetting  Automatic"
            ],
            [
              "BathroomHeaterOperationSetting  Standard",
              "BathroomHeaterOperationSetting  Standard"
            ],
            [
              "BathroomDryerOperationSetting  Automatic",
              "BathroomDryerOperationSetting  Automatic"
            ],
            [
              "BathroomDryerOperationSetting  Standard",
              "BathroomDryerOperationSetting  Standard"
            ],
            [
              "CoolAirCirculatorOperationSetting  Automatic",
              "CoolAirCirculatorOperationSetting  Automatic"
            ],
            [
              "CoolAirCirculatorOperationSetting  Standard",
              "CoolAirCirculatorOperationSetting  Standard"
            ],
            [
              "MistSaunaOperationSetting  Automatic",
              "MistSaunaOperationSetting  Automatic"
            ],
            [
              "MistSaunaOperationSetting  Standard",
              "MistSaunaOperationSetting  Standard"
            ],
            [
              "WaterMistOperationSetting  Automatic",
              "WaterMistOperationSetting  Automatic"
            ],
            [
              "WaterMistOperationSetting  Standard",
              "WaterMistOperationSetting  Standard"
            ],
            [
              "VentilationAirFlowRateSetting  Automatic",
              "VentilationAirFlowRateSetting  Automatic"
            ],
            [
              "FilterCleaningReminderSignSetting  Lit",
              "FilterCleaningReminderSignSetting  Lit"
            ],
            [
              "FilterCleaningReminderSignSetting  Not Lit",
              "FilterCleaningReminderSignSetting  Not Lit"
            ],
            [
              "HumanBodyDetectionStatus  YES",
              "HumanBodyDetectionStatus  YES"
            ],
            [
              "HumanBodyDetectionStatus  NO",
              "HumanBodyDetectionStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "HouseholdSolarPowerGeneration",
      "message0": "HouseholdSolarPowerGeneration %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HouseholdSolarPowerGeneration",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "FunctionToControlPurchaseSurplusElectricitySetting  ON",
              "FunctionToControlPurchaseSurplusElectricitySetting  ON"
            ],
            [
              "FunctionToControlPurchaseSurplusElectricitySetting  OFF",
              "FunctionToControlPurchaseSurplusElectricitySetting  OFF"
            ],
            [
              "FunctionToControlTheTypeOfSurplusElectricityPurchase  Valid",
              "FunctionToControlTheTypeOfSurplusElectricityPurchase  Valid"
            ],
            [
              "FunctionToControlTheTypeOfSurplusElectricityPurchase  Invalid",
              "FunctionToControlTheTypeOfSurplusElectricityPurchase  Invalid"
            ],
            [
              "FitContractType  FIT",
              "FitContractType  FIT"
            ],
            [
              "FitContractType  Non-FIT",
              "FitContractType  Non-FIT"
            ],
            [
              "FitContractType  No setting",
              "FitContractType  No setting"
            ],
            [
              "SelfConsumptionType  With self-consumption",
              "SelfConsumptionType  With self-consumption"
            ],
            [
              "SelfConsumptionType  Without self-consumption",
              "SelfConsumptionType  Without self-consumption"
            ],
            [
              "SelfConsumptionType  Unknown",
              "SelfConsumptionType  Unknown"
            ],
            [
              "OutputPowerRestraintStatus  Ongoing restraint (output power control)",
              "OutputPowerRestraintStatus  Ongoing restraint (output power control)"
            ],
            [
              "OutputPowerRestraintStatus  Ongoing restraint (except output power control)",
              "OutputPowerRestraintStatus  Ongoing restraint (except output power control)"
            ],
            [
              "OutputPowerRestraintStatus  Ongoing restraint (reason for restraint is unknown)",
              "OutputPowerRestraintStatus  Ongoing restraint (reason for restraint is unknown)"
            ],
            [
              "OutputPowerRestraintStatus  Not restraining",
              "OutputPowerRestraintStatus  Not restraining"
            ],
            [
              "OutputPowerRestraintStatus  Unknown",
              "OutputPowerRestraintStatus  Unknown"
            ],
            [
              "ResettingCumulativeAmountOfElectricEnergyGenerated  Reset",
              "ResettingCumulativeAmountOfElectricEnergyGenerated  Reset"
            ],
            [
              "ResettingCumulativeAmountOfElectricEnergySold  Reset",
              "ResettingCumulativeAmountOfElectricEnergySold  Reset"
            ]
          ]
        }
      ]
    },
    {
      "type": "HotWaterHeatSourceEquipment",
      "message0": "HotWaterHeatSourceEquipment %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HotWaterHeatSourceEquipment",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "OffTimerSetting  ON",
              "OffTimerSetting  ON"
            ],
            [
              "OffTimerSetting  OFF",
              "OffTimerSetting  OFF"
            ],
            [
              "OperationModeSetting  Heating",
              "OperationModeSetting  Heating"
            ],
            [
              "OperationModeSetting  Cooling",
              "OperationModeSetting  Cooling"
            ],
            [
              "WaterTemperature1  Automatic",
              "WaterTemperature1  Automatic"
            ],
            [
              "WaterTemperature2  Automatic",
              "WaterTemperature2  Automatic"
            ],
            [
              "MeasuredTemperatureOfOutwardWater(exitWaterTemperature)  Undefined",
              "MeasuredTemperatureOfOutwardWater(exitWaterTemperature)  Undefined"
            ],
            [
              "MeasuredTemperatureOfInwardWater(entranceWaterTemperature)  Undefined",
              "MeasuredTemperatureOfInwardWater(entranceWaterTemperature)  Undefined"
            ],
            [
              "SpecialOperationSetting  Normal",
              "SpecialOperationSetting  Normal"
            ],
            [
              "SpecialOperationSetting  Modest",
              "SpecialOperationSetting  Modest"
            ],
            [
              "SpecialOperationSetting  High power",
              "SpecialOperationSetting  High power"
            ],
            [
              "DailyTimerSetting  Timer OFF",
              "DailyTimerSetting  Timer OFF"
            ],
            [
              "DailyTimerSetting  timer 1",
              "DailyTimerSetting  timer 1"
            ],
            [
              "DailyTimerSetting  timer 2",
              "DailyTimerSetting  timer 2"
            ],
            [
              "PowerConsumptionMeasurementMethod  Node unit",
              "PowerConsumptionMeasurementMethod  Node unit"
            ],
            [
              "PowerConsumptionMeasurementMethod  Class unit",
              "PowerConsumptionMeasurementMethod  Class unit"
            ],
            [
              "PowerConsumptionMeasurementMethod  Instance unit",
              "PowerConsumptionMeasurementMethod  Instance unit"
            ]
          ]
        }
      ]
    },
    {
      "type": "FloorHeater",
      "message0": "FloorHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FloorHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "OffTimerSetting  ON",
              "OffTimerSetting  ON"
            ],
            [
              "OffTimerSetting  OFF",
              "OffTimerSetting  OFF"
            ],
            [
              "Temperature1  Automatic",
              "Temperature1  Automatic"
            ],
            [
              "Temperature2  Automatic",
              "Temperature2  Automatic"
            ],
            [
              "MeasuredRoomTemperature  Undefined",
              "MeasuredRoomTemperature  Undefined"
            ],
            [
              "SpecialOperationSetting  Normal operation",
              "SpecialOperationSetting  Normal operation"
            ],
            [
              "SpecialOperationSetting  Moderate Operation",
              "SpecialOperationSetting  Moderate Operation"
            ],
            [
              "SpecialOperationSetting  High power operation",
              "SpecialOperationSetting  High power operation"
            ],
            [
              "DailyTimerSetting  Timer off",
              "DailyTimerSetting  Timer off"
            ],
            [
              "DailyTimerSetting  Timer1",
              "DailyTimerSetting  Timer1"
            ],
            [
              "DailyTimerSetting  Timer2",
              "DailyTimerSetting  Timer2"
            ],
            [
              "PowerConsumptionMeasurementMethod  Node unit",
              "PowerConsumptionMeasurementMethod  Node unit"
            ],
            [
              "PowerConsumptionMeasurementMethod  Class unit",
              "PowerConsumptionMeasurementMethod  Class unit"
            ],
            [
              "PowerConsumptionMeasurementMethod  Instance unit",
              "PowerConsumptionMeasurementMethod  Instance unit"
            ]
          ]
        }
      ]
    },
    {
      "type": "FuelCell",
      "message0": "FuelCell %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FuelCell",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "CumulativePowerGenerationOutputResetSetting  Reset",
              "CumulativePowerGenerationOutputResetSetting  Reset"
            ],
            [
              "CumulativeGasConsumptionResetSetting  Reset",
              "CumulativeGasConsumptionResetSetting  Reset"
            ],
            [
              "InHouseCumulativePowerConsumptionReset  Reset",
              "InHouseCumulativePowerConsumptionReset  Reset"
            ],
            [
              "DesignatedPowerGenerationStatus  Power generation at the max. rating",
              "DesignatedPowerGenerationStatus  Power generation at the max. rating"
            ],
            [
              "DesignatedPowerGenerationStatus  Load following power generation",
              "DesignatedPowerGenerationStatus  Load following power generation"
            ]
          ]
        }
      ]
    },
    {
      "type": "StorageBattery",
      "message0": "StorageBattery %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "StorageBattery",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ChargingMethod  Maximum charging electric energy charting",
              "ChargingMethod  Maximum charging electric energy charting"
            ],
            [
              "ChargingMethod  Surplus electric energy charging",
              "ChargingMethod  Surplus electric energy charging"
            ],
            [
              "ChargingMethod  Designated electric energy charging",
              "ChargingMethod  Designated electric energy charging"
            ],
            [
              "ChargingMethod  Designated current power charging",
              "ChargingMethod  Designated current power charging"
            ],
            [
              "ChargingMethod  Others",
              "ChargingMethod  Others"
            ],
            [
              "DischargingMethod  Maximum discharge electric energy discharging",
              "DischargingMethod  Maximum discharge electric energy discharging"
            ],
            [
              "DischargingMethod  Load following discharge",
              "DischargingMethod  Load following discharge"
            ],
            [
              "DischargingMethod  Designated electric energy discharging",
              "DischargingMethod  Designated electric energy discharging"
            ],
            [
              "DischargingMethod  Designated current power discharging",
              "DischargingMethod  Designated current power discharging"
            ],
            [
              "DischargingMethod  Others",
              "DischargingMethod  Others"
            ],
            [
              "ReInterconnectionPermissionSetting  ON",
              "ReInterconnectionPermissionSetting  ON"
            ],
            [
              "ReInterconnectionPermissionSetting  OFF",
              "ReInterconnectionPermissionSetting  OFF"
            ],
            [
              "OperationPermissionSetting  ON",
              "OperationPermissionSetting  ON"
            ],
            [
              "OperationPermissionSetting  OFF",
              "OperationPermissionSetting  OFF"
            ],
            [
              "IndependentOperationPermissionSetting  ON",
              "IndependentOperationPermissionSetting  ON"
            ],
            [
              "IndependentOperationPermissionSetting  OFF",
              "IndependentOperationPermissionSetting  OFF"
            ],
            [
              "MeasuredCumulativeDischargingElectricEnergyResetSetting  Reset",
              "MeasuredCumulativeDischargingElectricEnergyResetSetting  Reset"
            ],
            [
              "MeasuredCumulativeChargingElectricEnergyResetSetting  Reset",
              "MeasuredCumulativeChargingElectricEnergyResetSetting  Reset"
            ],
            [
              "BatteryType  unknown",
              "BatteryType  unknown"
            ],
            [
              "BatteryType  lead",
              "BatteryType  lead"
            ],
            [
              "BatteryType  ni-mh",
              "BatteryType  ni-mh"
            ],
            [
              "BatteryType  ni-cd",
              "BatteryType  ni-cd"
            ],
            [
              "BatteryType  lib",
              "BatteryType  lib"
            ],
            [
              "BatteryType  zinc",
              "BatteryType  zinc"
            ],
            [
              "BatteryType  alkaline",
              "BatteryType  alkaline"
            ]
          ]
        }
      ]
    },
    {
      "type": "EvChargeAndDischargeSystem",
      "message0": "EvChargeAndDischargeSystem %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EvChargeAndDischargeSystem",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "EvChargerAndDischarger",
      "message0": "EvChargerAndDischarger %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EvChargerAndDischarger",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ChargerDischargerType  AC_CPLT",
              "ChargerDischargerType  AC_CPLT"
            ],
            [
              "ChargerDischargerType  AC_HLC_Charge",
              "ChargerDischargerType  AC_HLC_Charge"
            ],
            [
              "ChargerDischargerType  AC_HLC_ChargeDischarge",
              "ChargerDischargerType  AC_HLC_ChargeDischarge"
            ],
            [
              "ChargerDischargerType  DC_AA_Charge",
              "ChargerDischargerType  DC_AA_Charge"
            ],
            [
              "ChargerDischargerType  DC_AA_ChargeDischarge",
              "ChargerDischargerType  DC_AA_ChargeDischarge"
            ],
            [
              "ChargerDischargerType  DC_AA_Discharge",
              "ChargerDischargerType  DC_AA_Discharge"
            ],
            [
              "ChargerDischargerType  DC_BB_Charge",
              "ChargerDischargerType  DC_BB_Charge"
            ],
            [
              "ChargerDischargerType  DC_BB_ChargeDischarge",
              "ChargerDischargerType  DC_BB_ChargeDischarge"
            ],
            [
              "ChargerDischargerType  DC_BB_Discharge",
              "ChargerDischargerType  DC_BB_Discharge"
            ],
            [
              "ChargerDischargerType  DC_EE_Charge",
              "ChargerDischargerType  DC_EE_Charge"
            ],
            [
              "ChargerDischargerType  DC_EE_ChargeDischarge",
              "ChargerDischargerType  DC_EE_ChargeDischarge"
            ],
            [
              "ChargerDischargerType  DC_EE_Discharge",
              "ChargerDischargerType  DC_EE_Discharge"
            ],
            [
              "ChargerDischargerType  DC_FF_Charge",
              "ChargerDischargerType  DC_FF_Charge"
            ],
            [
              "ChargerDischargerType  DC_FF_ChargeDischarge",
              "ChargerDischargerType  DC_FF_ChargeDischarge"
            ],
            [
              "ChargerDischargerType  DC_FF_Discharge",
              "ChargerDischargerType  DC_FF_Discharge"
            ],
            [
              "VehicleConnectionConfirmation  Connection confirmation",
              "VehicleConnectionConfirmation  Connection confirmation"
            ],
            [
              "CumulativeAmountOfDischargingElectricEnergyResetSetting  Reset",
              "CumulativeAmountOfDischargingElectricEnergyResetSetting  Reset"
            ],
            [
              "CumulativeAmountOfChargingElectricEnergyResetSetting  Reset",
              "CumulativeAmountOfChargingElectricEnergyResetSetting  Reset"
            ],
            [
              "SystemInterconnectedType  Grid connection(reverse flow acceptable)",
              "SystemInterconnectedType  Grid connection(reverse flow acceptable)"
            ],
            [
              "SystemInterconnectedType  Independent operation",
              "SystemInterconnectedType  Independent operation"
            ],
            [
              "SystemInterconnectedType  Grid connection(reverse flow not acceptable)",
              "SystemInterconnectedType  Grid connection(reverse flow not acceptable)"
            ]
          ]
        }
      ]
    },
    {
      "type": "EngineCogeneration",
      "message0": "EngineCogeneration %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EngineCogeneration",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "CumulativePowerGenerationOutputResetSetting  Reset",
              "CumulativePowerGenerationOutputResetSetting  Reset"
            ],
            [
              "CumulativeGasConsumptionResetSetting  Reset",
              "CumulativeGasConsumptionResetSetting  Reset"
            ],
            [
              "PowerGenerationStatus  Generating",
              "PowerGenerationStatus  Generating"
            ],
            [
              "PowerGenerationStatus  Stopped",
              "PowerGenerationStatus  Stopped"
            ],
            [
              "PowerGenerationStatus  Idling",
              "PowerGenerationStatus  Idling"
            ],
            [
              "InHouseCumulativePowerConsumptionReset  Reset",
              "InHouseCumulativePowerConsumptionReset  Reset"
            ],
            [
              "SystemInterconnectedType  System-interconnected type (reverse power flow acceptable)",
              "SystemInterconnectedType  System-interconnected type (reverse power flow acceptable)"
            ],
            [
              "SystemInterconnectedType  Independent type",
              "SystemInterconnectedType  Independent type"
            ],
            [
              "SystemInterconnectedType  System-interconnected type(reverse power flow not acceptable)",
              "SystemInterconnectedType  System-interconnected type(reverse power flow not acceptable)"
            ]
          ]
        }
      ]
    },
    {
      "type": "WattHourMeter",
      "message0": "WattHourMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WattHourMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "WaterFlowMeter",
      "message0": "WaterFlowMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WaterFlowMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "WaterFlowMeterClassification  running water",
              "WaterFlowMeterClassification  running water"
            ],
            [
              "WaterFlowMeterClassification  recycled water",
              "WaterFlowMeterClassification  recycled water"
            ],
            [
              "WaterFlowMeterClassification  sewage water",
              "WaterFlowMeterClassification  sewage water"
            ],
            [
              "WaterFlowMeterClassification  other water",
              "WaterFlowMeterClassification  other water"
            ],
            [
              "OwnerClassification  Not specified",
              "OwnerClassification  Not specified"
            ],
            [
              "OwnerClassification  Public waterworks company",
              "OwnerClassification  Public waterworks company"
            ],
            [
              "OwnerClassification  Private sector company",
              "OwnerClassification  Private sector company"
            ],
            [
              "OwnerClassification  Individual",
              "OwnerClassification  Individual"
            ],
            [
              "DetectionOfAbnormalValueInMeteringData  YES",
              "DetectionOfAbnormalValueInMeteringData  YES"
            ],
            [
              "DetectionOfAbnormalValueInMeteringData  NO",
              "DetectionOfAbnormalValueInMeteringData  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "GasMeter",
      "message0": "GasMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GasMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "LpGasMeter",
      "message0": "LpGasMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LpGasMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "TestCallSetting  YES",
              "TestCallSetting  YES"
            ],
            [
              "TestCallSetting  NO",
              "TestCallSetting  NO"
            ],
            [
              "ErrorDetectionStatusOfMeteringData  YES",
              "ErrorDetectionStatusOfMeteringData  YES"
            ],
            [
              "ErrorDetectionStatusOfMeteringData  NO",
              "ErrorDetectionStatusOfMeteringData  NO"
            ],
            [
              "CenterValveShutOffStatus  YES",
              "CenterValveShutOffStatus  YES"
            ],
            [
              "CenterValveShutOffStatus  NO",
              "CenterValveShutOffStatus  NO"
            ],
            [
              "CenterValveShutOffRecoveryPermissionSettingStatus  YES",
              "CenterValveShutOffRecoveryPermissionSettingStatus  YES"
            ],
            [
              "CenterValveShutOffRecoveryPermissionSettingStatus  NO",
              "CenterValveShutOffRecoveryPermissionSettingStatus  NO"
            ],
            [
              "EmergencyValveShutOffStatus  YES",
              "EmergencyValveShutOffStatus  YES"
            ],
            [
              "EmergencyValveShutOffStatus  NO",
              "EmergencyValveShutOffStatus  NO"
            ],
            [
              "ShutOffValveOpenCloseStatus  YES",
              "ShutOffValveOpenCloseStatus  YES"
            ],
            [
              "ShutOffValveOpenCloseStatus  NO",
              "ShutOffValveOpenCloseStatus  NO"
            ],
            [
              "ResidualVolumeControlWarning  Residual volume control warning level 1",
              "ResidualVolumeControlWarning  Residual volume control warning level 1"
            ],
            [
              "ResidualVolumeControlWarning  Residual volume control warning level 2",
              "ResidualVolumeControlWarning  Residual volume control warning level 2"
            ],
            [
              "ResidualVolumeControlWarning  Residual volume control warning level 3",
              "ResidualVolumeControlWarning  Residual volume control warning level 3"
            ],
            [
              "ResidualVolumeControlWarning  No residual volume control warning",
              "ResidualVolumeControlWarning  No residual volume control warning"
            ]
          ]
        }
      ]
    },
    {
      "type": "PowerDistributionBoard",
      "message0": "PowerDistributionBoard %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "PowerDistributionBoard",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "NumberOfMeasurementChannel(simplex)  Undefined",
              "NumberOfMeasurementChannel(simplex)  Undefined"
            ],
            [
              "NumberOfMeasurementChannels(duplex)  Undefined",
              "NumberOfMeasurementChannels(duplex)  Undefined"
            ]
          ]
        }
      ]
    },
    {
      "type": "SmartElectricEnergyMeter",
      "message0": "SmartElectricEnergyMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SmartElectricEnergyMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "LowVoltageSmartElectricEnergyMeter",
      "message0": "LowVoltageSmartElectricEnergyMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LowVoltageSmartElectricEnergyMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "SmartGasMeter",
      "message0": "SmartGasMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SmartGasMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "GasMeterClassificationSetting  City gas",
              "GasMeterClassificationSetting  City gas"
            ],
            [
              "GasMeterClassificationSetting  LP gas",
              "GasMeterClassificationSetting  LP gas"
            ],
            [
              "GasMeterClassificationSetting  Natural gas",
              "GasMeterClassificationSetting  Natural gas"
            ],
            [
              "GasMeterClassificationSetting  Other",
              "GasMeterClassificationSetting  Other"
            ],
            [
              "OwnerClassificationSetting  Not specified",
              "OwnerClassificationSetting  Not specified"
            ],
            [
              "OwnerClassificationSetting  City gas",
              "OwnerClassificationSetting  City gas"
            ],
            [
              "OwnerClassificationSetting  LP gas",
              "OwnerClassificationSetting  LP gas"
            ],
            [
              "OwnerClassificationSetting  Private-sector company",
              "OwnerClassificationSetting  Private-sector company"
            ],
            [
              "OwnerClassificationSetting  Indivisual",
              "OwnerClassificationSetting  Indivisual"
            ],
            [
              "PermissionFromTheCenterToReopenTheValveClosedByTheCenter  YES",
              "PermissionFromTheCenterToReopenTheValveClosedByTheCenter  YES"
            ],
            [
              "PermissionFromTheCenterToReopenTheValveClosedByTheCenter  NO",
              "PermissionFromTheCenterToReopenTheValveClosedByTheCenter  NO"
            ],
            [
              "EmergencyClosureOfShutoffValve  YES",
              "EmergencyClosureOfShutoffValve  YES"
            ],
            [
              "EmergencyClosureOfShutoffValve  NO",
              "EmergencyClosureOfShutoffValve  NO"
            ],
            [
              "ShutoffValveStatus  Open",
              "ShutoffValveStatus  Open"
            ],
            [
              "ShutoffValveStatus  Close",
              "ShutoffValveStatus  Close"
            ]
          ]
        }
      ]
    },
    {
      "type": "HighVoltageSmartElectricEnergyMeter",
      "message0": "HighVoltageSmartElectricEnergyMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HighVoltageSmartElectricEnergyMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "KerosenseMeter",
      "message0": "KerosenseMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "KerosenseMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "SmartKerosenseMeter",
      "message0": "SmartKerosenseMeter %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SmartKerosenseMeter",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OwnerCategorySetting  Not specified",
              "OwnerCategorySetting  Not specified"
            ],
            [
              "OwnerCategorySetting  Kerosene sales",
              "OwnerCategorySetting  Kerosene sales"
            ],
            [
              "OwnerCategorySetting  Private-sector company",
              "OwnerCategorySetting  Private-sector company"
            ],
            [
              "OwnerCategorySetting  Indivisual",
              "OwnerCategorySetting  Indivisual"
            ],
            [
              "MeterReadingDataAbnormalityDetectionStatus  YES",
              "MeterReadingDataAbnormalityDetectionStatus  YES"
            ],
            [
              "MeterReadingDataAbnormalityDetectionStatus  NO",
              "MeterReadingDataAbnormalityDetectionStatus  NO"
            ],
            [
              "ResidualVolumeControlWarningLevel  Level 1",
              "ResidualVolumeControlWarningLevel  Level 1"
            ],
            [
              "ResidualVolumeControlWarningLevel  Level 2",
              "ResidualVolumeControlWarningLevel  Level 2"
            ],
            [
              "ResidualVolumeControlWarningLevel  Level 3",
              "ResidualVolumeControlWarningLevel  Level 3"
            ],
            [
              "ResidualVolumeControlWarningLevel  None",
              "ResidualVolumeControlWarningLevel  None"
            ]
          ]
        }
      ]
    },
    {
      "type": "GeneralLighting",
      "message0": "GeneralLighting %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "GeneralLighting",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "OffTimerSetting  ON",
              "OffTimerSetting  ON"
            ],
            [
              "OffTimerSetting  OFF",
              "OffTimerSetting  OFF"
            ],
            [
              "LightingModeSetting  Automatic",
              "LightingModeSetting  Automatic"
            ],
            [
              "LightingModeSetting  Normal Lighting",
              "LightingModeSetting  Normal Lighting"
            ],
            [
              "LightingModeSetting  Night Lighting",
              "LightingModeSetting  Night Lighting"
            ],
            [
              "LightingModeSetting  Color Lighting",
              "LightingModeSetting  Color Lighting"
            ],
            [
              "LightColorSettingForMainLighting  Incandescent lamp color",
              "LightColorSettingForMainLighting  Incandescent lamp color"
            ],
            [
              "LightColorSettingForMainLighting  White",
              "LightColorSettingForMainLighting  White"
            ],
            [
              "LightColorSettingForMainLighting  Daylight white",
              "LightColorSettingForMainLighting  Daylight white"
            ],
            [
              "LightColorSettingForMainLighting  Daylight color",
              "LightColorSettingForMainLighting  Daylight color"
            ],
            [
              "LightColorSettingForMainLighting  Other",
              "LightColorSettingForMainLighting  Other"
            ],
            [
              "LightColorSettingForNightLighting  Incandescent lamp color",
              "LightColorSettingForNightLighting  Incandescent lamp color"
            ],
            [
              "LightColorSettingForNightLighting  White",
              "LightColorSettingForNightLighting  White"
            ],
            [
              "LightColorSettingForNightLighting  Daylight white",
              "LightColorSettingForNightLighting  Daylight white"
            ],
            [
              "LightColorSettingForNightLighting  Daylight color",
              "LightColorSettingForNightLighting  Daylight color"
            ],
            [
              "LightColorSettingForNightLighting  Other",
              "LightColorSettingForNightLighting  Other"
            ],
            [
              "LightingModeStatusInAutoMode  Normal Lighting",
              "LightingModeStatusInAutoMode  Normal Lighting"
            ],
            [
              "LightingModeStatusInAutoMode  Night Lighting",
              "LightingModeStatusInAutoMode  Night Lighting"
            ],
            [
              "LightingModeStatusInAutoMode  Color Lighting",
              "LightingModeStatusInAutoMode  Color Lighting"
            ],
            [
              "LightingModeStatusInAutoMode  Color Lighting",
              "LightingModeStatusInAutoMode  Color Lighting"
            ]
          ]
        }
      ]
    },
    {
      "type": "MonoFunctionalLighting",
      "message0": "MonoFunctionalLighting %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MonoFunctionalLighting",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "LightingForSolidLightEmittingSource",
      "message0": "LightingForSolidLightEmittingSource %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LightingForSolidLightEmittingSource",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerReservationSetting  YES",
              "OnTimerReservationSetting  YES"
            ],
            [
              "OnTimerReservationSetting  NO",
              "OnTimerReservationSetting  NO"
            ],
            [
              "OffTimerReservationSetting  YES",
              "OffTimerReservationSetting  YES"
            ],
            [
              "OffTimerReservationSetting  NO",
              "OffTimerReservationSetting  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "Buzzar",
      "message0": "Buzzar %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Buzzar",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SoundGenerationSetting  YES",
              "SoundGenerationSetting  YES"
            ],
            [
              "SoundGenerationSetting  NO",
              "SoundGenerationSetting  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "EvCharger",
      "message0": "EvCharger %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EvCharger",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ChargerDischargerType  AC_CPLT",
              "ChargerDischargerType  AC_CPLT"
            ],
            [
              "ChargerDischargerType  AC_HLC_Charge",
              "ChargerDischargerType  AC_HLC_Charge"
            ],
            [
              "ChargerDischargerType  DC_AA_Charge",
              "ChargerDischargerType  DC_AA_Charge"
            ],
            [
              "ChargerDischargerType  DC_BB_Charge",
              "ChargerDischargerType  DC_BB_Charge"
            ],
            [
              "ChargerDischargerType  DC_EE_Charge",
              "ChargerDischargerType  DC_EE_Charge"
            ],
            [
              "ChargerDischargerType  DC_FF_Charge",
              "ChargerDischargerType  DC_FF_Charge"
            ],
            [
              "VehicleConnectionConfirmation  Connection confirmation",
              "VehicleConnectionConfirmation  Connection confirmation"
            ],
            [
              "CumulativeAmountOfChargingElectricEnergyResetSetting  Reset",
              "CumulativeAmountOfChargingElectricEnergyResetSetting  Reset"
            ],
            [
              "OperationModeSetting  Charge",
              "OperationModeSetting  Charge"
            ],
            [
              "OperationModeSetting  standby",
              "OperationModeSetting  standby"
            ],
            [
              "OperationModeSetting  Idle",
              "OperationModeSetting  Idle"
            ],
            [
              "OperationModeSetting  Other",
              "OperationModeSetting  Other"
            ]
          ]
        }
      ]
    },
    {
      "type": "HouseholdSmallWindTurbinePowerGeneration",
      "message0": "HouseholdSmallWindTurbinePowerGeneration %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HouseholdSmallWindTurbinePowerGeneration",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SystemInterconnectionStatus  System-linked type",
              "SystemInterconnectionStatus  System-linked type"
            ],
            [
              "SystemInterconnectionStatus  Independent type",
              "SystemInterconnectionStatus  Independent type"
            ],
            [
              "SystemInterconnectionStatus  Hybrid type",
              "SystemInterconnectionStatus  Hybrid type"
            ],
            [
              "ResettingCumulativeAmountOfElectricityGenerated  Reset",
              "ResettingCumulativeAmountOfElectricityGenerated  Reset"
            ],
            [
              "ResettingCumulativeAmountOfElectricitySold  Reset",
              "ResettingCumulativeAmountOfElectricitySold  Reset"
            ],
            [
              "BrakingStatus  ON",
              "BrakingStatus  ON"
            ],
            [
              "BrakingStatus  OFF",
              "BrakingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "LightingSystem",
      "message0": "LightingSystem %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "LightingSystem",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "ExtendedLightingSystem",
      "message0": "ExtendedLightingSystem %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ExtendedLightingSystem",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "AutomaticOperationControllingSetting  ON",
              "AutomaticOperationControllingSetting  ON"
            ],
            [
              "AutomaticOperationControllingSetting  OFF",
              "AutomaticOperationControllingSetting  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "MultipleInputPcs",
      "message0": "MultipleInputPcs %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MultipleInputPcs",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "SystemInterconnectedType  System-interconnected type(reverse power flow acceptable)",
              "SystemInterconnectedType  System-interconnected type(reverse power flow acceptable)"
            ],
            [
              "SystemInterconnectedType  Independent type",
              "SystemInterconnectedType  Independent type"
            ],
            [
              "SystemInterconnectedType  System-interconnected type(reverse power flow not acceptable)",
              "SystemInterconnectedType  System-interconnected type(reverse power flow not acceptable)"
            ]
          ]
        }
      ]
    },
    {
      "type": "HybridWaterHeater",
      "message0": "HybridWaterHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "HybridWaterHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "AutomaticWaterHeatingSetting  Auto Heating",
              "AutomaticWaterHeatingSetting  Auto Heating"
            ],
            [
              "AutomaticWaterHeatingSetting  Manual No Heating",
              "AutomaticWaterHeatingSetting  Manual No Heating"
            ],
            [
              "AutomaticWaterHeatingSetting  Manual Heating",
              "AutomaticWaterHeatingSetting  Manual Heating"
            ],
            [
              "WaterHeatingStatus  YES",
              "WaterHeatingStatus  YES"
            ],
            [
              "WaterHeatingStatus  NO",
              "WaterHeatingStatus  NO"
            ],
            [
              "HeaterStatus  YES",
              "HeaterStatus  YES"
            ],
            [
              "HeaterStatus  NO",
              "HeaterStatus  NO"
            ],
            [
              "HotWaterSupplyModeSettingForAuxiliaryHeatSourceMachine  ON",
              "HotWaterSupplyModeSettingForAuxiliaryHeatSourceMachine  ON"
            ],
            [
              "HotWaterSupplyModeSettingForAuxiliaryHeatSourceMachine  OFF",
              "HotWaterSupplyModeSettingForAuxiliaryHeatSourceMachine  OFF"
            ],
            [
              "HeaterModeSettingForAuxiliaryHeatSourceMachine  ON",
              "HeaterModeSettingForAuxiliaryHeatSourceMachine  ON"
            ],
            [
              "HeaterModeSettingForAuxiliaryHeatSourceMachine  OFF",
              "HeaterModeSettingForAuxiliaryHeatSourceMachine  OFF"
            ],
            [
              "LinkageModeSettingForSolarPowerGeneration  Mode off",
              "LinkageModeSettingForSolarPowerGeneration  Mode off"
            ],
            [
              "LinkageModeSettingForSolarPowerGeneration  Household consumption",
              "LinkageModeSettingForSolarPowerGeneration  Household consumption"
            ],
            [
              "LinkageModeSettingForSolarPowerGeneration  Prioritizing electricity sales",
              "LinkageModeSettingForSolarPowerGeneration  Prioritizing electricity sales"
            ],
            [
              "LinkageModeSettingForSolarPowerGeneration  Economic efficiency",
              "LinkageModeSettingForSolarPowerGeneration  Economic efficiency"
            ],
            [
              "HotWaterSupplyStatus  YES",
              "HotWaterSupplyStatus  YES"
            ],
            [
              "HotWaterSupplyStatus  NO",
              "HotWaterSupplyStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "ElectricHotWaterPot",
      "message0": "ElectricHotWaterPot %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ElectricHotWaterPot",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "CoverOpenCloseStatus  Open",
              "CoverOpenCloseStatus  Open"
            ],
            [
              "CoverOpenCloseStatus  Close",
              "CoverOpenCloseStatus  Close"
            ],
            [
              "NoWaterwarning  YES",
              "NoWaterwarning  YES"
            ],
            [
              "NoWaterwarning  NO",
              "NoWaterwarning  NO"
            ],
            [
              "BoilUpSetting  Boil-up start",
              "BoilUpSetting  Boil-up start"
            ],
            [
              "BoilUpSetting  Boil-up stop/warmer",
              "BoilUpSetting  Boil-up stop/warmer"
            ],
            [
              "BoilUpWarmerModeSetting  Citric acid cleaning",
              "BoilUpWarmerModeSetting  Citric acid cleaning"
            ],
            [
              "BoilUpWarmerModeSetting  normal warmer",
              "BoilUpWarmerModeSetting  normal warmer"
            ],
            [
              "BoilUpWarmerModeSetting  power-saving warmer",
              "BoilUpWarmerModeSetting  power-saving warmer"
            ],
            [
              "HotWaterDischargeStatus  YES",
              "HotWaterDischargeStatus  YES"
            ],
            [
              "HotWaterDischargeStatus  NO",
              "HotWaterDischargeStatus  NO"
            ],
            [
              "LockStatus  YES",
              "LockStatus  YES"
            ],
            [
              "LockStatus  NO",
              "LockStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "Refrigerator",
      "message0": "Refrigerator %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Refrigerator",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "QuickFreezeFunctionSetting  normal operation",
              "QuickFreezeFunctionSetting  normal operation"
            ],
            [
              "QuickFreezeFunctionSetting  quick freeze",
              "QuickFreezeFunctionSetting  quick freeze"
            ],
            [
              "QuickFreezeFunctionSetting  standby for quick freezing",
              "QuickFreezeFunctionSetting  standby for quick freezing"
            ],
            [
              "QuickRefrigerationFunctionSetting  normal operation",
              "QuickRefrigerationFunctionSetting  normal operation"
            ],
            [
              "QuickRefrigerationFunctionSetting  quick refrigeration",
              "QuickRefrigerationFunctionSetting  quick refrigeration"
            ],
            [
              "QuickRefrigerationFunctionSetting  standby for quick refrigeration",
              "QuickRefrigerationFunctionSetting  standby for quick refrigeration"
            ],
            [
              "IcemakerSetting  enable icemaker",
              "IcemakerSetting  enable icemaker"
            ],
            [
              "IcemakerSetting  disable icemaker",
              "IcemakerSetting  disable icemaker"
            ],
            [
              "IcemakerSetting  temporarily disable icemaker",
              "IcemakerSetting  temporarily disable icemaker"
            ],
            [
              "IcemakerOperationStatus  YES",
              "IcemakerOperationStatus  YES"
            ],
            [
              "IcemakerOperationStatus  NO",
              "IcemakerOperationStatus  NO"
            ],
            [
              "IcemakerTankStatus  Water in tank",
              "IcemakerTankStatus  Water in tank"
            ],
            [
              "IcemakerTankStatus  No water",
              "IcemakerTankStatus  No water"
            ],
            [
              "RefrigeratorCompartmentHumidificationFunctionSetting  ON",
              "RefrigeratorCompartmentHumidificationFunctionSetting  ON"
            ],
            [
              "RefrigeratorCompartmentHumidificationFunctionSetting  OFF",
              "RefrigeratorCompartmentHumidificationFunctionSetting  OFF"
            ],
            [
              "VegetableCompartmentHumidificationFunctionSetting  ON",
              "VegetableCompartmentHumidificationFunctionSetting  ON"
            ],
            [
              "VegetableCompartmentHumidificationFunctionSetting  OFF",
              "VegetableCompartmentHumidificationFunctionSetting  OFF"
            ],
            [
              "DeodorizationFunctionSetting  ON",
              "DeodorizationFunctionSetting  ON"
            ],
            [
              "DeodorizationFunctionSetting  OFF",
              "DeodorizationFunctionSetting  OFF"
            ],
            [
              "DoorOpenCloseStatus  Open",
              "DoorOpenCloseStatus  Open"
            ],
            [
              "DoorOpenCloseStatus  Close",
              "DoorOpenCloseStatus  Close"
            ],
            [
              "DoorOpenWarning  YES",
              "DoorOpenWarning  YES"
            ],
            [
              "DoorOpenWarning  NO",
              "DoorOpenWarning  NO"
            ],
            [
              "RefrigeratorCompartmentDoorStatus  Open",
              "RefrigeratorCompartmentDoorStatus  Open"
            ],
            [
              "RefrigeratorCompartmentDoorStatus  Close",
              "RefrigeratorCompartmentDoorStatus  Close"
            ],
            [
              "FreezerCompartmentDoorStatus  Open",
              "FreezerCompartmentDoorStatus  Open"
            ],
            [
              "FreezerCompartmentDoorStatus  Close",
              "FreezerCompartmentDoorStatus  Close"
            ],
            [
              "IceCompartmentDoorStatus  Open",
              "IceCompartmentDoorStatus  Open"
            ],
            [
              "IceCompartmentDoorStatus  Close",
              "IceCompartmentDoorStatus  Close"
            ],
            [
              "VegetableCompartmentDoorStatus  Open",
              "VegetableCompartmentDoorStatus  Open"
            ],
            [
              "VegetableCompartmentDoorStatus  Close",
              "VegetableCompartmentDoorStatus  Close"
            ],
            [
              "MultiRefrigeratingModeCompartmentDoorStatus  Open",
              "MultiRefrigeratingModeCompartmentDoorStatus  Open"
            ],
            [
              "MultiRefrigeratingModeCompartmentDoorStatus  Close",
              "MultiRefrigeratingModeCompartmentDoorStatus  Close"
            ]
          ]
        }
      ]
    },
    {
      "type": "CombinationMicrowaveOven",
      "message0": "CombinationMicrowaveOven %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CombinationMicrowaveOven",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "DoorOpenCloseStatus  Open",
              "DoorOpenCloseStatus  Open"
            ],
            [
              "DoorOpenCloseStatus  Close",
              "DoorOpenCloseStatus  Close"
            ],
            [
              "HeatingStatus  Initial state",
              "HeatingStatus  Initial state"
            ],
            [
              "HeatingStatus  Heating",
              "HeatingStatus  Heating"
            ],
            [
              "HeatingStatus  Heating suspended",
              "HeatingStatus  Heating suspended"
            ],
            [
              "HeatingStatus  Reporting completion of heating cycle",
              "HeatingStatus  Reporting completion of heating cycle"
            ],
            [
              "HeatingStatus  Setting",
              "HeatingStatus  Setting"
            ],
            [
              "HeatingStatus  Preheating",
              "HeatingStatus  Preheating"
            ],
            [
              "HeatingStatus  Preheat temperature maintenance",
              "HeatingStatus  Preheat temperature maintenance"
            ],
            [
              "HeatingStatus  Heating temporarily stopped for manual cooking action",
              "HeatingStatus  Heating temporarily stopped for manual cooking action"
            ],
            [
              "HeatingSetting  Start/restart heating",
              "HeatingSetting  Start/restart heating"
            ],
            [
              "HeatingSetting  Suspend heating",
              "HeatingSetting  Suspend heating"
            ],
            [
              "HeatingSetting  Stop heating",
              "HeatingSetting  Stop heating"
            ],
            [
              "OvenModeSetting  Automatic selection",
              "OvenModeSetting  Automatic selection"
            ],
            [
              "OvenModeSetting  Convection oven",
              "OvenModeSetting  Convection oven"
            ],
            [
              "OvenModeSetting  Circulation oven",
              "OvenModeSetting  Circulation oven"
            ],
            [
              "OvenModeSetting  Hybrid oven",
              "OvenModeSetting  Hybrid oven"
            ],
            [
              "OvenModeSetting  undefined",
              "OvenModeSetting  undefined"
            ],
            [
              "OvenPreheatingSetting  With preheating",
              "OvenPreheatingSetting  With preheating"
            ],
            [
              "OvenPreheatingSetting  Without preheating",
              "OvenPreheatingSetting  Without preheating"
            ],
            [
              "OvenPreheatingSetting  undefined",
              "OvenPreheatingSetting  undefined"
            ],
            [
              "FermentingModeSetting  Automatic selection",
              "FermentingModeSetting  Automatic selection"
            ],
            [
              "FermentingModeSetting  Convection fermentation",
              "FermentingModeSetting  Convection fermentation"
            ],
            [
              "FermentingModeSetting  Circulation fermentation",
              "FermentingModeSetting  Circulation fermentation"
            ],
            [
              "FermentingModeSetting  Hybrid fermentation",
              "FermentingModeSetting  Hybrid fermentation"
            ],
            [
              "FermentingModeSetting  Microwave fermentation",
              "FermentingModeSetting  Microwave fermentation"
            ],
            [
              "FermentingModeSetting  undefined",
              "FermentingModeSetting  undefined"
            ],
            [
              "HeatingModeSetting  Microwave heating",
              "HeatingModeSetting  Microwave heating"
            ],
            [
              "HeatingModeSetting  Defrosting",
              "HeatingModeSetting  Defrosting"
            ],
            [
              "HeatingModeSetting  Oven",
              "HeatingModeSetting  Oven"
            ],
            [
              "HeatingModeSetting  Grill",
              "HeatingModeSetting  Grill"
            ],
            [
              "HeatingModeSetting  Toaster",
              "HeatingModeSetting  Toaster"
            ],
            [
              "HeatingModeSetting  Fermenting",
              "HeatingModeSetting  Fermenting"
            ],
            [
              "HeatingModeSetting  Stewing",
              "HeatingModeSetting  Stewing"
            ],
            [
              "HeatingModeSetting  Steaming",
              "HeatingModeSetting  Steaming"
            ],
            [
              "HeatingModeSetting  Two stage microwave heating",
              "HeatingModeSetting  Two stage microwave heating"
            ],
            [
              "HeatingModeSetting  undefined",
              "HeatingModeSetting  undefined"
            ],
            [
              "AutomaticHeatingSetting  Automatic",
              "AutomaticHeatingSetting  Automatic"
            ],
            [
              "AutomaticHeatingSetting  Manual",
              "AutomaticHeatingSetting  Manual"
            ],
            [
              "AutomaticHeatingSetting  undefined",
              "AutomaticHeatingSetting  undefined"
            ]
          ]
        }
      ]
    },
    {
      "type": "CookingHeater",
      "message0": "CookingHeater %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CookingHeater",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ChildLockSetting  OFF",
              "ChildLockSetting  OFF"
            ],
            [
              "ChildLockSetting  ON",
              "ChildLockSetting  ON"
            ],
            [
              "RadiantHeaterLockSetting  OFF",
              "RadiantHeaterLockSetting  OFF"
            ],
            [
              "RadiantHeaterLockSetting  ON",
              "RadiantHeaterLockSetting  ON"
            ],
            [
              "AllStopSetting  Stop all heating",
              "AllStopSetting  Stop all heating"
            ]
          ]
        }
      ]
    },
    {
      "type": "RiceCooker",
      "message0": "RiceCooker %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "RiceCooker",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "RiceCookingReservationSetting  ON",
              "RiceCookingReservationSetting  ON"
            ],
            [
              "RiceCookingReservationSetting  OFF",
              "RiceCookingReservationSetting  OFF"
            ],
            [
              "CoverOpenCloseStatus  Open",
              "CoverOpenCloseStatus  Open"
            ],
            [
              "CoverOpenCloseStatus  Close",
              "CoverOpenCloseStatus  Close"
            ],
            [
              "RiceCookingStatus  Stop",
              "RiceCookingStatus  Stop"
            ],
            [
              "RiceCookingStatus  Preheating",
              "RiceCookingStatus  Preheating"
            ],
            [
              "RiceCookingStatus  Rice cooking",
              "RiceCookingStatus  Rice cooking"
            ],
            [
              "RiceCookingStatus  Steaming",
              "RiceCookingStatus  Steaming"
            ],
            [
              "RiceCookingStatus  ",
              "RiceCookingStatus  "
            ],
            [
              "RiceCookingControlSetting  Rice cooking start/restart",
              "RiceCookingControlSetting  Rice cooking start/restart"
            ],
            [
              "RiceCookingControlSetting  Rice cooking suspension",
              "RiceCookingControlSetting  Rice cooking suspension"
            ],
            [
              "WarmerSetting  YES",
              "WarmerSetting  YES"
            ],
            [
              "WarmerSetting  NO",
              "WarmerSetting  NO"
            ],
            [
              "InnerPotRemovalStatus  YES",
              "InnerPotRemovalStatus  YES"
            ],
            [
              "InnerPotRemovalStatus  NO",
              "InnerPotRemovalStatus  NO"
            ],
            [
              "CoverRemovalStatus  YES",
              "CoverRemovalStatus  YES"
            ],
            [
              "CoverRemovalStatus  NO",
              "CoverRemovalStatus  NO"
            ]
          ]
        }
      ]
    },
    {
      "type": "WashingMachine",
      "message0": "WashingMachine %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WashingMachine",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "DoorCoverOpenCloseStatus  Open",
              "DoorCoverOpenCloseStatus  Open"
            ],
            [
              "DoorCoverOpenCloseStatus  Close",
              "DoorCoverOpenCloseStatus  Close"
            ],
            [
              "WashingMachineSetting   Start/restart the washing cycle",
              "WashingMachineSetting   Start/restart the washing cycle"
            ],
            [
              "WashingMachineSetting   Suspend the washing cycle",
              "WashingMachineSetting   Suspend the washing cycle"
            ],
            [
              "WashingMachineSetting   Stop the washing cycle",
              "WashingMachineSetting   Stop the washing cycle"
            ],
            [
              "CurrentStageOfWashingCycle  Washing",
              "CurrentStageOfWashingCycle  Washing"
            ],
            [
              "CurrentStageOfWashingCycle  Rinsing",
              "CurrentStageOfWashingCycle  Rinsing"
            ],
            [
              "CurrentStageOfWashingCycle  Spin drying",
              "CurrentStageOfWashingCycle  Spin drying"
            ],
            [
              "CurrentStageOfWashingCycle  Suspended",
              "CurrentStageOfWashingCycle  Suspended"
            ],
            [
              "CurrentStageOfWashingCycle  The washing cycle stopped/completed",
              "CurrentStageOfWashingCycle  The washing cycle stopped/completed"
            ]
          ]
        }
      ]
    },
    {
      "type": "ClothDryer",
      "message0": "ClothDryer %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ClothDryer",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "DoorCoverOpenCloseStatus  Open",
              "DoorCoverOpenCloseStatus  Open"
            ],
            [
              "DoorCoverOpenCloseStatus  Close",
              "DoorCoverOpenCloseStatus  Close"
            ],
            [
              "DryingSetting   Start/restart drying",
              "DryingSetting   Start/restart drying"
            ],
            [
              "DryingSetting   Suspend drying",
              "DryingSetting   Suspend drying"
            ],
            [
              "DryingSetting   Stop drying",
              "DryingSetting   Stop drying"
            ],
            [
              "DryingStatus  Drying in progress",
              "DryingStatus  Drying in progress"
            ],
            [
              "DryingStatus  Drying suspended",
              "DryingStatus  Drying suspended"
            ],
            [
              "DryingStatus  Drying stopped/completed",
              "DryingStatus  Drying stopped/completed"
            ]
          ]
        }
      ]
    },
    {
      "type": "CommercialShowCase",
      "message0": "CommercialShowCase %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CommercialShowCase",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OperationModeSetting  Cooling",
              "OperationModeSetting  Cooling"
            ],
            [
              "OperationModeSetting  Non-cooling",
              "OperationModeSetting  Non-cooling"
            ],
            [
              "OperationModeSetting  Defrosting",
              "OperationModeSetting  Defrosting"
            ],
            [
              "OperationModeSetting  Other",
              "OperationModeSetting  Other"
            ],
            [
              "ShowcaseTypeInformation  Non-fluorocarbon inverter",
              "ShowcaseTypeInformation  Non-fluorocarbon inverter"
            ],
            [
              "ShowcaseTypeInformation  Inverter",
              "ShowcaseTypeInformation  Inverter"
            ],
            [
              "ShowcaseTypeInformation  Other",
              "ShowcaseTypeInformation  Other"
            ],
            [
              "DoorTypeInformation  Open",
              "DoorTypeInformation  Open"
            ],
            [
              "DoorTypeInformation  Close",
              "DoorTypeInformation  Close"
            ],
            [
              "ShowcaseConfigurationInformation  Separate type",
              "ShowcaseConfigurationInformation  Separate type"
            ],
            [
              "ShowcaseConfigurationInformation  Built-in type",
              "ShowcaseConfigurationInformation  Built-in type"
            ],
            [
              "ShowcaseShapeInformation  Box type",
              "ShowcaseShapeInformation  Box type"
            ],
            [
              "ShowcaseShapeInformation  Desktop type",
              "ShowcaseShapeInformation  Desktop type"
            ],
            [
              "ShowcaseShapeInformation  Triple glass type",
              "ShowcaseShapeInformation  Triple glass type"
            ],
            [
              "ShowcaseShapeInformation  Quadruple glass type",
              "ShowcaseShapeInformation  Quadruple glass type"
            ],
            [
              "ShowcaseShapeInformation  Reach-in",
              "ShowcaseShapeInformation  Reach-in"
            ],
            [
              "ShowcaseShapeInformation  Glass top type",
              "ShowcaseShapeInformation  Glass top type"
            ],
            [
              "ShowcaseShapeInformation  Multistage open (ceiling blowoff type)",
              "ShowcaseShapeInformation  Multistage open (ceiling blowoff type)"
            ],
            [
              "ShowcaseShapeInformation  ultistageopen (backside blowoff type)",
              "ShowcaseShapeInformation  ultistageopen (backside blowoff type)"
            ],
            [
              "ShowcaseShapeInformation  Flat type",
              "ShowcaseShapeInformation  Flat type"
            ],
            [
              "ShowcaseShapeInformation  Walk-in type",
              "ShowcaseShapeInformation  Walk-in type"
            ],
            [
              "ShowcaseShapeInformation  Other",
              "ShowcaseShapeInformation  Other"
            ],
            [
              "TemperatureRangeInformationForInsideTheCase  Refrigeration",
              "TemperatureRangeInformationForInsideTheCase  Refrigeration"
            ],
            [
              "TemperatureRangeInformationForInsideTheCase  Freezing",
              "TemperatureRangeInformationForInsideTheCase  Freezing"
            ],
            [
              "InternalLightingOperationStatus  ON",
              "InternalLightingOperationStatus  ON"
            ],
            [
              "InternalLightingOperationStatus  OFF",
              "InternalLightingOperationStatus  OFF"
            ],
            [
              "ExternalLightingOperationStatus  ON",
              "ExternalLightingOperationStatus  ON"
            ],
            [
              "ExternalLightingOperationStatus  OFF",
              "ExternalLightingOperationStatus  OFF"
            ],
            [
              "CompressorOperationStatus  ON",
              "CompressorOperationStatus  ON"
            ],
            [
              "CompressorOperationStatus  OFF",
              "CompressorOperationStatus  OFF"
            ],
            [
              "HeaterMode  ON",
              "HeaterMode  ON"
            ],
            [
              "HeaterMode  OFF",
              "HeaterMode  OFF"
            ],
            [
              "TypeOfLightingInsideTheShowcase  Fluorescent lights",
              "TypeOfLightingInsideTheShowcase  Fluorescent lights"
            ],
            [
              "TypeOfLightingInsideTheShowcase  LED",
              "TypeOfLightingInsideTheShowcase  LED"
            ],
            [
              "TypeOfLightingInsideTheShowcase  No lighting",
              "TypeOfLightingInsideTheShowcase  No lighting"
            ],
            [
              "TypeOfLightingInsideTheShowcase  Other",
              "TypeOfLightingInsideTheShowcase  Other"
            ],
            [
              "TypeOfLightingOutsideTheCase  Fluorescent lights",
              "TypeOfLightingOutsideTheCase  Fluorescent lights"
            ],
            [
              "TypeOfLightingOutsideTheCase  LED",
              "TypeOfLightingOutsideTheCase  LED"
            ],
            [
              "TypeOfLightingOutsideTheCase  No lighting",
              "TypeOfLightingOutsideTheCase  No lighting"
            ],
            [
              "TypeOfLightingOutsideTheCase  Other",
              "TypeOfLightingOutsideTheCase  Other"
            ]
          ]
        }
      ]
    },
    {
      "type": "WasherAndDryer",
      "message0": "WasherAndDryer %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WasherAndDryer",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "DoorCoverOpenCloseStatus  Open",
              "DoorCoverOpenCloseStatus  Open"
            ],
            [
              "DoorCoverOpenCloseStatus  Close",
              "DoorCoverOpenCloseStatus  Close"
            ],
            [
              "WasherAndDryerSetting  Start/restart or in progress",
              "WasherAndDryerSetting  Start/restart or in progress"
            ],
            [
              "WasherAndDryerSetting  Suspend",
              "WasherAndDryerSetting  Suspend"
            ],
            [
              "WasherAndDryerSetting  Stop",
              "WasherAndDryerSetting  Stop"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  Standard",
              "WasherAndDryerCycleSetting1(note1)  Standard"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  silent",
              "WasherAndDryerCycleSetting1(note1)  silent"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  heavily soiled clothes",
              "WasherAndDryerCycleSetting1(note1)  heavily soiled clothes"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  hard-to-remove stains",
              "WasherAndDryerCycleSetting1(note1)  hard-to-remove stains"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  presoaking",
              "WasherAndDryerCycleSetting1(note1)  presoaking"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  blankets",
              "WasherAndDryerCycleSetting1(note1)  blankets"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  soft",
              "WasherAndDryerCycleSetting1(note1)  soft"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  dry",
              "WasherAndDryerCycleSetting1(note1)  dry"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  clean rinsing",
              "WasherAndDryerCycleSetting1(note1)  clean rinsing"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  ironing/business shirts",
              "WasherAndDryerCycleSetting1(note1)  ironing/business shirts"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  hang drying",
              "WasherAndDryerCycleSetting1(note1)  hang drying"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  thick clothes",
              "WasherAndDryerCycleSetting1(note1)  thick clothes"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  disinfection",
              "WasherAndDryerCycleSetting1(note1)  disinfection"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  oil stains",
              "WasherAndDryerCycleSetting1(note1)  oil stains"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  memory",
              "WasherAndDryerCycleSetting1(note1)  memory"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  detergent saving",
              "WasherAndDryerCycleSetting1(note1)  detergent saving"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  lightly soiled clothes",
              "WasherAndDryerCycleSetting1(note1)  lightly soiled clothes"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  quick wash of small amount of laundry",
              "WasherAndDryerCycleSetting1(note1)  quick wash of small amount of laundry"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  Standard",
              "WasherAndDryerCycleSetting1(note1)  Standard"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  silent",
              "WasherAndDryerCycleSetting1(note1)  silent"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  heavily soiled clothes",
              "WasherAndDryerCycleSetting1(note1)  heavily soiled clothes"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  hard-to-remove stains",
              "WasherAndDryerCycleSetting1(note1)  hard-to-remove stains"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  presoaking",
              "WasherAndDryerCycleSetting1(note1)  presoaking"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  blankets",
              "WasherAndDryerCycleSetting1(note1)  blankets"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  soft",
              "WasherAndDryerCycleSetting1(note1)  soft"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  dry",
              "WasherAndDryerCycleSetting1(note1)  dry"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  clean rinsing",
              "WasherAndDryerCycleSetting1(note1)  clean rinsing"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  disinfection",
              "WasherAndDryerCycleSetting1(note1)  disinfection"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  oil stains",
              "WasherAndDryerCycleSetting1(note1)  oil stains"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  memory",
              "WasherAndDryerCycleSetting1(note1)  memory"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  detergent saving",
              "WasherAndDryerCycleSetting1(note1)  detergent saving"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  lightly soiled clothes",
              "WasherAndDryerCycleSetting1(note1)  lightly soiled clothes"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  quick wash of small amount of laundry",
              "WasherAndDryerCycleSetting1(note1)  quick wash of small amount of laundry"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  tank cleaning",
              "WasherAndDryerCycleSetting1(note1)  tank cleaning"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  Standard",
              "WasherAndDryerCycleSetting1(note1)  Standard"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  blankets",
              "WasherAndDryerCycleSetting1(note1)  blankets"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  soft",
              "WasherAndDryerCycleSetting1(note1)  soft"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  dry",
              "WasherAndDryerCycleSetting1(note1)  dry"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  ironing/business shirts",
              "WasherAndDryerCycleSetting1(note1)  ironing/business shirts"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  hang drying",
              "WasherAndDryerCycleSetting1(note1)  hang drying"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  thick clothes",
              "WasherAndDryerCycleSetting1(note1)  thick clothes"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  disinfection",
              "WasherAndDryerCycleSetting1(note1)  disinfection"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  shrinkage minimization",
              "WasherAndDryerCycleSetting1(note1)  shrinkage minimization"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  finishing",
              "WasherAndDryerCycleSetting1(note1)  finishing"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  stationary drying",
              "WasherAndDryerCycleSetting1(note1)  stationary drying"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  user definition of drying time",
              "WasherAndDryerCycleSetting1(note1)  user definition of drying time"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  garment warming",
              "WasherAndDryerCycleSetting1(note1)  garment warming"
            ],
            [
              "WasherAndDryerCycleSetting1(note1)  tank cleaning",
              "WasherAndDryerCycleSetting1(note1)  tank cleaning"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  No washing",
              "WasherAndDryerCycleSetting2(note1)  No washing"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  Standard",
              "WasherAndDryerCycleSetting2(note1)  Standard"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  silent",
              "WasherAndDryerCycleSetting2(note1)  silent"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  heavily soiled clothes",
              "WasherAndDryerCycleSetting2(note1)  heavily soiled clothes"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  hard-to-remove stains",
              "WasherAndDryerCycleSetting2(note1)  hard-to-remove stains"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  presoaking",
              "WasherAndDryerCycleSetting2(note1)  presoaking"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  blankets",
              "WasherAndDryerCycleSetting2(note1)  blankets"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  soft",
              "WasherAndDryerCycleSetting2(note1)  soft"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  dry",
              "WasherAndDryerCycleSetting2(note1)  dry"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  clean rinsing",
              "WasherAndDryerCycleSetting2(note1)  clean rinsing"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  disinfection",
              "WasherAndDryerCycleSetting2(note1)  disinfection"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  oil stains",
              "WasherAndDryerCycleSetting2(note1)  oil stains"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  memory",
              "WasherAndDryerCycleSetting2(note1)  memory"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  detergent saving",
              "WasherAndDryerCycleSetting2(note1)  detergent saving"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  lightly soiled clothes",
              "WasherAndDryerCycleSetting2(note1)  lightly soiled clothes"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  quick wash of small amount of laundry",
              "WasherAndDryerCycleSetting2(note1)  quick wash of small amount of laundry"
            ],
            [
              "WasherAndDryerCycleSetting2(note1)  tank cleaning",
              "WasherAndDryerCycleSetting2(note1)  tank cleaning"
            ],
            [
              "DryingCycleSetting(note1)  No drying",
              "DryingCycleSetting(note1)  No drying"
            ],
            [
              "DryingCycleSetting(note1)  Standard",
              "DryingCycleSetting(note1)  Standard"
            ],
            [
              "DryingCycleSetting(note1)  blankets",
              "DryingCycleSetting(note1)  blankets"
            ],
            [
              "DryingCycleSetting(note1)  soft",
              "DryingCycleSetting(note1)  soft"
            ],
            [
              "DryingCycleSetting(note1)  dry",
              "DryingCycleSetting(note1)  dry"
            ],
            [
              "DryingCycleSetting(note1)  ironing/business shirts",
              "DryingCycleSetting(note1)  ironing/business shirts"
            ],
            [
              "DryingCycleSetting(note1)  hang drying",
              "DryingCycleSetting(note1)  hang drying"
            ],
            [
              "DryingCycleSetting(note1)  thick clothes",
              "DryingCycleSetting(note1)  thick clothes"
            ],
            [
              "DryingCycleSetting(note1)  disinfection",
              "DryingCycleSetting(note1)  disinfection"
            ],
            [
              "DryingCycleSetting(note1)  shrinkage minimization",
              "DryingCycleSetting(note1)  shrinkage minimization"
            ],
            [
              "DryingCycleSetting(note1)  finishing",
              "DryingCycleSetting(note1)  finishing"
            ],
            [
              "DryingCycleSetting(note1)  stationary drying",
              "DryingCycleSetting(note1)  stationary drying"
            ],
            [
              "DryingCycleSetting(note1)  user definition of drying time",
              "DryingCycleSetting(note1)  user definition of drying time"
            ],
            [
              "DryingCycleSetting(note1)  garment warming",
              "DryingCycleSetting(note1)  garment warming"
            ],
            [
              "DryingCycleSetting(note1)  heater current limit",
              "DryingCycleSetting(note1)  heater current limit"
            ],
            [
              "DryingCycleSetting(note1)  tank cleaning",
              "DryingCycleSetting(note1)  tank cleaning"
            ],
            [
              "WaterFlowRateSetting  AUTO",
              "WaterFlowRateSetting  AUTO"
            ],
            [
              "RotationSpeedForSpinDryingSetting  AUTO",
              "RotationSpeedForSpinDryingSetting  AUTO"
            ],
            [
              "DegreeOfDryingSetting  AUTO",
              "DegreeOfDryingSetting  AUTO"
            ],
            [
              "PresoakingTimeSetting  AUTO",
              "PresoakingTimeSetting  AUTO"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  washing",
              "CurrentStageOfWasherAndDryerCycle  washing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  rinsing",
              "CurrentStageOfWasherAndDryerCycle  rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  spin drying",
              "CurrentStageOfWasherAndDryerCycle  spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  suspended",
              "CurrentStageOfWasherAndDryerCycle  suspended"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  washing completed",
              "CurrentStageOfWasherAndDryerCycle  washing completed"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  washing/drying (without wrinkling minimization) completed",
              "CurrentStageOfWasherAndDryerCycle  washing/drying (without wrinkling minimization) completed"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  drying",
              "CurrentStageOfWasherAndDryerCycle  drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  wrinkling minimization",
              "CurrentStageOfWasherAndDryerCycle  wrinkling minimization"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  drying (with wrinkling minimization) completed",
              "CurrentStageOfWasherAndDryerCycle  drying (with wrinkling minimization) completed"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  standing by to start",
              "CurrentStageOfWasherAndDryerCycle  standing by to start"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  1st rinsing",
              "CurrentStageOfWasherAndDryerCycle  1st rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  2nd rinsing",
              "CurrentStageOfWasherAndDryerCycle  2nd rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  3rd rinsing",
              "CurrentStageOfWasherAndDryerCycle  3rd rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  4th rinsing",
              "CurrentStageOfWasherAndDryerCycle  4th rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  5th rinsing",
              "CurrentStageOfWasherAndDryerCycle  5th rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  6th rinsing",
              "CurrentStageOfWasherAndDryerCycle  6th rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  7th rinsing",
              "CurrentStageOfWasherAndDryerCycle  7th rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  8th rinsing",
              "CurrentStageOfWasherAndDryerCycle  8th rinsing"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  1st spin drying",
              "CurrentStageOfWasherAndDryerCycle  1st spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  2nd spin drying",
              "CurrentStageOfWasherAndDryerCycle  2nd spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  3rd spin drying",
              "CurrentStageOfWasherAndDryerCycle  3rd spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  4th spin drying",
              "CurrentStageOfWasherAndDryerCycle  4th spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  5th spin drying",
              "CurrentStageOfWasherAndDryerCycle  5th spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  6th spin drying",
              "CurrentStageOfWasherAndDryerCycle  6th spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  7th spin drying",
              "CurrentStageOfWasherAndDryerCycle  7th spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  8th spin drying",
              "CurrentStageOfWasherAndDryerCycle  8th spin drying"
            ],
            [
              "CurrentStageOfWasherAndDryerCycle  Preheat spin drying",
              "CurrentStageOfWasherAndDryerCycle  Preheat spin drying"
            ],
            [
              "WaterVolumeSetting1  AUTO",
              "WaterVolumeSetting1  AUTO"
            ],
            [
              "WaterVolumeSetting2  AUTO",
              "WaterVolumeSetting2  AUTO"
            ],
            [
              "WashingTimeSetting  AUTO",
              "WashingTimeSetting  AUTO"
            ],
            [
              "NumberOfTimesOfRinsingSetting  AUTO",
              "NumberOfTimesOfRinsingSetting  AUTO"
            ],
            [
              "SpinDryingTimeSetting  AUTO",
              "SpinDryingTimeSetting  AUTO"
            ],
            [
              "DryingTimeSetting  AUTO",
              "DryingTimeSetting  AUTO"
            ],
            [
              "BathtubWaterRecycleSetting  Bathtub water not used",
              "BathtubWaterRecycleSetting  Bathtub water not used"
            ],
            [
              "BathtubWaterRecycleSetting  Washing only",
              "BathtubWaterRecycleSetting  Washing only"
            ],
            [
              "BathtubWaterRecycleSetting  Rinsing only(excluding the final rinsing)",
              "BathtubWaterRecycleSetting  Rinsing only(excluding the final rinsing)"
            ],
            [
              "BathtubWaterRecycleSetting  All rinsing processes",
              "BathtubWaterRecycleSetting  All rinsing processes"
            ],
            [
              "BathtubWaterRecycleSetting  Washing + rinsing(excluding the final rinsing)",
              "BathtubWaterRecycleSetting  Washing + rinsing(excluding the final rinsing)"
            ],
            [
              "BathtubWaterRecycleSetting  Washing + all rinsing processes",
              "BathtubWaterRecycleSetting  Washing + all rinsing processes"
            ],
            [
              "WrinklingMinimizationSetting  ON",
              "WrinklingMinimizationSetting  ON"
            ],
            [
              "WrinklingMinimizationSetting  OFF",
              "WrinklingMinimizationSetting  OFF"
            ],
            [
              "DoorCoverLockSetting  Lock",
              "DoorCoverLockSetting  Lock"
            ],
            [
              "DoorCoverLockSetting  Unlock",
              "DoorCoverLockSetting  Unlock"
            ]
          ]
        }
      ]
    },
    {
      "type": "CommercialShowCaseOutdoorUnit",
      "message0": "CommercialShowCaseOutdoorUnit %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CommercialShowCaseOutdoorUnit",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ExceptionalStatus  Normal",
              "ExceptionalStatus  Normal"
            ],
            [
              "ExceptionalStatus  Defrosting",
              "ExceptionalStatus  Defrosting"
            ],
            [
              "OperationModeSetting  Cooling",
              "OperationModeSetting  Cooling"
            ],
            [
              "OperationModeSetting  Non-cooling",
              "OperationModeSetting  Non-cooling"
            ],
            [
              "GroupInformation  ON",
              "GroupInformation  ON"
            ],
            [
              "GroupInformation  OFF",
              "GroupInformation  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "DishwasherAndDryer",
      "message0": "DishwasherAndDryer %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DishwasherAndDryer",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "OnTimerSetting  ON",
              "OnTimerSetting  ON"
            ],
            [
              "OnTimerSetting  OFF",
              "OnTimerSetting  OFF"
            ],
            [
              "OnTimerSetting(time)  Undefined",
              "OnTimerSetting(time)  Undefined"
            ],
            [
              "DoorCoverOpenCloseSetting  Open",
              "DoorCoverOpenCloseSetting  Open"
            ],
            [
              "DoorCoverOpenCloseSetting  Close",
              "DoorCoverOpenCloseSetting  Close"
            ],
            [
              "DoorCoverLockSetting  Lock",
              "DoorCoverLockSetting  Lock"
            ],
            [
              "DoorCoverLockSetting  Unlock",
              "DoorCoverLockSetting  Unlock"
            ],
            [
              "OperationStatusSetting  Start/restart(ed) or in progress",
              "OperationStatusSetting  Start/restart(ed) or in progress"
            ],
            [
              "OperationStatusSetting  Operation suspended",
              "OperationStatusSetting  Operation suspended"
            ],
            [
              "OperationStatusSetting  Operation stopped",
              "OperationStatusSetting  Operation stopped"
            ],
            [
              "DishWashingMethodSetting  Dish-washing operation OFF",
              "DishWashingMethodSetting  Dish-washing operation OFF"
            ],
            [
              "DishWashingMethodSetting  Standard",
              "DishWashingMethodSetting  Standard"
            ],
            [
              "DishWashingMethodSetting  Silent",
              "DishWashingMethodSetting  Silent"
            ],
            [
              "DishWashingMethodSetting  Heavily stained",
              "DishWashingMethodSetting  Heavily stained"
            ],
            [
              "DishWashingMethodSetting  Hard-to-remove stains",
              "DishWashingMethodSetting  Hard-to-remove stains"
            ],
            [
              "DishWashingMethodSetting  Soft",
              "DishWashingMethodSetting  Soft"
            ],
            [
              "DishWashingMethodSetting  Lightly stained",
              "DishWashingMethodSetting  Lightly stained"
            ],
            [
              "DishWashingMethodSetting  Quick wash of small amount of laundry",
              "DishWashingMethodSetting  Quick wash of small amount of laundry"
            ],
            [
              "DishWashingMethodSetting  Rinsing only",
              "DishWashingMethodSetting  Rinsing only"
            ],
            [
              "DishWashingMethodSetting  Disinfection",
              "DishWashingMethodSetting  Disinfection"
            ],
            [
              "DishWashingMethodSetting  Maintenance",
              "DishWashingMethodSetting  Maintenance"
            ],
            [
              "DryingCycleSetting  Drying operation OFF",
              "DryingCycleSetting  Drying operation OFF"
            ],
            [
              "DryingCycleSetting  Very low",
              "DryingCycleSetting  Very low"
            ],
            [
              "DryingCycleSetting  Low",
              "DryingCycleSetting  Low"
            ],
            [
              "DryingCycleSetting  Standard",
              "DryingCycleSetting  Standard"
            ],
            [
              "DryingCycleSetting  Soft",
              "DryingCycleSetting  Soft"
            ],
            [
              "DryingCycleSetting  High",
              "DryingCycleSetting  High"
            ],
            [
              "DryingCycleSetting  Very high",
              "DryingCycleSetting  Very high"
            ],
            [
              "DryingCycleSetting  User definition of drying time",
              "DryingCycleSetting  User definition of drying time"
            ],
            [
              "DryingCycleSetting  Drying only",
              "DryingCycleSetting  Drying only"
            ],
            [
              "DryingCycleSetting  Drying inside",
              "DryingCycleSetting  Drying inside"
            ],
            [
              "StoringMethodSetting  Storing operation OFF",
              "StoringMethodSetting  Storing operation OFF"
            ],
            [
              "StoringMethodSetting  Blowing",
              "StoringMethodSetting  Blowing"
            ],
            [
              "StoringMethodSetting  Dehumidification",
              "StoringMethodSetting  Dehumidification"
            ],
            [
              "StoringMethodSetting  Disinfection",
              "StoringMethodSetting  Disinfection"
            ],
            [
              "PrewashingTimeSetting  AUTO",
              "PrewashingTimeSetting  AUTO"
            ],
            [
              "HighestWaterTemperatureSettingForPrewashing  Not to use warm water",
              "HighestWaterTemperatureSettingForPrewashing  Not to use warm water"
            ],
            [
              "HighestWaterTemperatureSettingForPrewashing  AUTO",
              "HighestWaterTemperatureSettingForPrewashing  AUTO"
            ],
            [
              "WashingTimeSetting  AUTO",
              "WashingTimeSetting  AUTO"
            ],
            [
              "HighestWaterTemperatureSettingForWashing  Not to use warm water",
              "HighestWaterTemperatureSettingForWashing  Not to use warm water"
            ],
            [
              "HighestWaterTemperatureSettingForWashing  AUTO",
              "HighestWaterTemperatureSettingForWashing  AUTO"
            ],
            [
              "NumberOfTimesOfRinsingSetting  AUTO",
              "NumberOfTimesOfRinsingSetting  AUTO"
            ],
            [
              "HighestWaterTemperatureSettingForHotWaterRinsing  Not to use warm water",
              "HighestWaterTemperatureSettingForHotWaterRinsing  Not to use warm water"
            ],
            [
              "HighestWaterTemperatureSettingForHotWaterRinsing  AUTO",
              "HighestWaterTemperatureSettingForHotWaterRinsing  AUTO"
            ],
            [
              "DishWashingWaterVolumeSetting  AUTO",
              "DishWashingWaterVolumeSetting  AUTO"
            ],
            [
              "DishWashingWaterPressureSetting  AUTO",
              "DishWashingWaterPressureSetting  AUTO"
            ],
            [
              "DishWashingLevelSetting  AUTO",
              "DishWashingLevelSetting  AUTO"
            ],
            [
              "DryingTimeSetting  AUTO",
              "DryingTimeSetting  AUTO"
            ],
            [
              "HighestAirTemperatureSettingForHotAirDrying  Not to use warm water",
              "HighestAirTemperatureSettingForHotAirDrying  Not to use warm water"
            ],
            [
              "HighestAirTemperatureSettingForHotAirDrying  AUTO",
              "HighestAirTemperatureSettingForHotAirDrying  AUTO"
            ],
            [
              "DryingAirFlowRateSetting  AUTO",
              "DryingAirFlowRateSetting  AUTO"
            ],
            [
              "DryingLevelSetting  AUTO",
              "DryingLevelSetting  AUTO"
            ],
            [
              "OperationTransitionStatus  Before starting operation",
              "OperationTransitionStatus  Before starting operation"
            ],
            [
              "OperationTransitionStatus  Before operation",
              "OperationTransitionStatus  Before operation"
            ],
            [
              "OperationTransitionStatus  ON timer standing by",
              "OperationTransitionStatus  ON timer standing by"
            ],
            [
              "OperationTransitionStatus  Dish-washing ongoing",
              "OperationTransitionStatus  Dish-washing ongoing"
            ],
            [
              "OperationTransitionStatus  Prewashing ongoing",
              "OperationTransitionStatus  Prewashing ongoing"
            ],
            [
              "OperationTransitionStatus  Washing ongoing",
              "OperationTransitionStatus  Washing ongoing"
            ],
            [
              "OperationTransitionStatus  Rinsing ongoing",
              "OperationTransitionStatus  Rinsing ongoing"
            ],
            [
              "OperationTransitionStatus  Dish-washing suspended",
              "OperationTransitionStatus  Dish-washing suspended"
            ],
            [
              "OperationTransitionStatus  Drying ongoing",
              "OperationTransitionStatus  Drying ongoing"
            ],
            [
              "OperationTransitionStatus  Hot air drying ongoing",
              "OperationTransitionStatus  Hot air drying ongoing"
            ],
            [
              "OperationTransitionStatus  Air drying ongoing",
              "OperationTransitionStatus  Air drying ongoing"
            ],
            [
              "OperationTransitionStatus  Drying suspended",
              "OperationTransitionStatus  Drying suspended"
            ],
            [
              "OperationTransitionStatus  Storing ongoing",
              "OperationTransitionStatus  Storing ongoing"
            ],
            [
              "OperationTransitionStatus  Blowing ongoing",
              "OperationTransitionStatus  Blowing ongoing"
            ],
            [
              "OperationTransitionStatus  Dehumidification ongoing",
              "OperationTransitionStatus  Dehumidification ongoing"
            ],
            [
              "OperationTransitionStatus  Disinfection ongoing",
              "OperationTransitionStatus  Disinfection ongoing"
            ],
            [
              "OperationTransitionStatus  Storing suspended",
              "OperationTransitionStatus  Storing suspended"
            ],
            [
              "OperationTransitionStatus  Operation completed",
              "OperationTransitionStatus  Operation completed"
            ],
            [
              "OperationTransitionStatus  1st rinsing",
              "OperationTransitionStatus  1st rinsing"
            ],
            [
              "OperationTransitionStatus  2nd rinsing",
              "OperationTransitionStatus  2nd rinsing"
            ],
            [
              "OperationTransitionStatus  3rd rinsing",
              "OperationTransitionStatus  3rd rinsing"
            ],
            [
              "OperationTransitionStatus  4th rinsing",
              "OperationTransitionStatus  4th rinsing"
            ],
            [
              "OperationTransitionStatus  5th rinsing",
              "OperationTransitionStatus  5th rinsing"
            ],
            [
              "OperationTransitionStatus  6th rinsing",
              "OperationTransitionStatus  6th rinsing"
            ],
            [
              "OperationTransitionStatus  7th rinsing",
              "OperationTransitionStatus  7th rinsing"
            ],
            [
              "OperationTransitionStatus  8th rinsing",
              "OperationTransitionStatus  8th rinsing"
            ],
            [
              "OperationTransitionStatus  Unknown status",
              "OperationTransitionStatus  Unknown status"
            ],
            [
              "RemainingTimeOnTheOnTimer  Undefined",
              "RemainingTimeOnTheOnTimer  Undefined"
            ],
            [
              "RemainingTimeOfPrewashing  Undefined",
              "RemainingTimeOfPrewashing  Undefined"
            ],
            [
              "RemainingTimeOfWashing  Undefined",
              "RemainingTimeOfWashing  Undefined"
            ],
            [
              "RemainingTimeForRinsing  Undefined",
              "RemainingTimeForRinsing  Undefined"
            ],
            [
              "RemainingTimeOfDishWashing  Undefined",
              "RemainingTimeOfDishWashing  Undefined"
            ],
            [
              "RemainingDryingTime  Undefined",
              "RemainingDryingTime  Undefined"
            ],
            [
              "RemainingTimeOfWashingAndDrying  Undefined",
              "RemainingTimeOfWashingAndDrying  Undefined"
            ],
            [
              "UsedWaterVolume  Undefined",
              "UsedWaterVolume  Undefined"
            ]
          ]
        }
      ]
    },
    {
      "type": "WeighingMachine",
      "message0": "WeighingMachine %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "WeighingMachine",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "ParallelProcessingCombinationTypePowerControl",
      "message0": "ParallelProcessingCombinationTypePowerControl %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ParallelProcessingCombinationTypePowerControl",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "DrEventController",
      "message0": "DrEventController %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DrEventController",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "DrProgramType  CPP",
              "DrProgramType  CPP"
            ],
            [
              "DrProgramType  PTR",
              "DrProgramType  PTR"
            ],
            [
              "DrProgramType  Power use limit",
              "DrProgramType  Power use limit"
            ],
            [
              "DrProgramType  Power generation limit",
              "DrProgramType  Power generation limit"
            ],
            [
              "DrProgramType  Electricity forecast",
              "DrProgramType  Electricity forecast"
            ],
            [
              "DrProgramType  DLC",
              "DrProgramType  DLC"
            ],
            [
              "DrProgramType  Level designation",
              "DrProgramType  Level designation"
            ]
          ]
        }
      ]
    },
    {
      "type": "Switch(supportingJemAHaTerminals)",
      "message0": "Switch(supportingJemAHaTerminals) %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Switch(supportingJemAHaTerminals)",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "Controller",
      "message0": "Controller %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Controller",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "ConnectionStatus  Connected",
              "ConnectionStatus  Connected"
            ],
            [
              "ConnectionStatus  Disconnected",
              "ConnectionStatus  Disconnected"
            ],
            [
              "ConnectionStatus  Not registered",
              "ConnectionStatus  Not registered"
            ],
            [
              "ConnectionStatus  Deleted",
              "ConnectionStatus  Deleted"
            ]
          ]
        }
      ]
    },
    {
      "type": "Display",
      "message0": "Display %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Display",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "DisplayControlSetting  Displaying enabled",
              "DisplayControlSetting  Displaying enabled"
            ],
            [
              "DisplayControlSetting  Displaying disabled",
              "DisplayControlSetting  Displaying disabled"
            ],
            [
              "CharacterStringSettingAcceptanceStatus  Ready",
              "CharacterStringSettingAcceptanceStatus  Ready"
            ],
            [
              "CharacterStringSettingAcceptanceStatus  Busy",
              "CharacterStringSettingAcceptanceStatus  Busy"
            ]
          ]
        }
      ]
    },
    {
      "type": "Television",
      "message0": "Television %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Television",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "DisplayControlSetting  Displaying enabled",
              "DisplayControlSetting  Displaying enabled"
            ],
            [
              "DisplayControlSetting  Displaying disabled",
              "DisplayControlSetting  Displaying disabled"
            ],
            [
              "CharacterStringSettingAcceptanceStatus  Ready",
              "CharacterStringSettingAcceptanceStatus  Ready"
            ],
            [
              "CharacterStringSettingAcceptanceStatus  Busy",
              "CharacterStringSettingAcceptanceStatus  Busy"
            ]
          ]
        }
      ]
    },
    {
      "type": "Audio",
      "message0": "Audio %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "Audio",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "MuteSetting  ON",
              "MuteSetting  ON"
            ],
            [
              "MuteSetting  OFF",
              "MuteSetting  OFF"
            ]
          ]
        }
      ]
    },
    {
      "type": "NetworkCamera",
      "message0": "NetworkCamera %1",
      "output": null,
      "colour": 230,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NetworkCamera",
          "options": [
            [
              "OperatingStatus  ON",
              "OperatingStatus  ON"
            ],
            [
              "OperatingStatus  OFF",
              "OperatingStatus  OFF"
            ],
            [
              "StillImagePhotographySettingAcceptanceStatus  Ready",
              "StillImagePhotographySettingAcceptanceStatus  Ready"
            ],
            [
              "StillImagePhotographySettingAcceptanceStatus  Busy",
              "StillImagePhotographySettingAcceptanceStatus  Busy"
            ],
            [
              "StillImagePhotographySetting  Shoot",
              "StillImagePhotographySetting  Shoot"
            ]
          ]
        }
      ]
    }
  ]
  
);
Blockly.Blocks['setairconon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set aircon on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setairconoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set aircon off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lightison'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("light is on");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lightisoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("light is off");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_operation_status_of_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get operation status of light");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setlighton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set light on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setlightoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set light off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.defineBlocksWithJsonArray([
  {
    "type": "trigger_action",
    "message0": "Condition %1 Action %2",
    "args0": [
      {
        "type": "input_value",
        "name": "trigger"
      },
      {
        "type": "input_value",
        "name": "action"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "memo",
    "message0": "Memo \" %1 \"",
    "args0": [
      {
        "type": "field_input",
        "name": "text",
        "text": "Text"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_TEXTS_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "time",
    "message0": "at %1 : %2 %3 %4",
    "args0": [
      {
        "type": "field_input",
        "name": "hour",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "minute",
        "text": "0"
      },
      {
        "type": "field_dropdown",
        "name": "APM",
        "options": [
          [
            "AM",
            "AM"
          ],
          [
            "PM",
            "PM"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "period",
    "message0": "from %1 : %2 to %3 : %4 %5",
    "args0": [
      {
        "type": "field_input",
        "name": "time1",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "time2",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "time3",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "time4",
        "text": "0"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "timer",
    "message0": "after %1 hour %2 min",
    "args0": [
      {
        "type": "field_input",
        "name": "hour",
        "text": "0"
      },
      {
        "type": "field_input",
        "name": "minute",
        "text": "0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "weeks",
    "message0": "from %1 to %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "week1",
        "options": [
          [
            "SUN",
            "SUN"
          ],
          [
            "MON",
            "MON"
          ],
          [
            "TUE",
            "TUE"
          ],
          [
            "WED",
            "WED"
          ],
          [
            "THU",
            "THU"
          ],
          [
            "FRI",
            "FRI"
          ],
          [
            "SAT",
            "SAT"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "week2",
        "options": [
          [
            "SUN",
            "SUN"
          ],
          [
            "MON",
            "MON"
          ],
          [
            "TUE",
            "TUE"
          ],
          [
            "WED",
            "WED"
          ],
          [
            "THU",
            "THU"
          ],
          [
            "FRI",
            "FRI"
          ],
          [
            "SAT",
            "SAT"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "week",
    "message0": "on %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "week1",
        "options": [
          [
            "SUN",
            "SUN"
          ],
          [
            "MON",
            "MON"
          ],
          [
            "TUE",
            "TUE"
          ],
          [
            "WED",
            "WED"
          ],
          [
            "THU",
            "THU"
          ],
          [
            "FRI",
            "FRI"
          ],
          [
            "SAT",
            "SAT"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.defineBlocksWithJsonArray([
  {
    "type": "illuminance_sensor",
    "message0": "illuminance sensor %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "illuminance value",
            "Illuminance value"
          ]
        ]
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "general_lighting_number",
    "message0": "General Lighting %1 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "illuminance value",
            "Illuminance value"
          ],
          [
            "Brightness level step setting",
            "Brightness level step setting"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

