const expected = `user,totalWh
user_0,24473
user_1,24519
user_2,24564
user_3,24606
user_4,24676
user_5,24718
user_6,24762
user_7,24809
user_8,24857
user_9,24908
user_10,24963
user_11,25009
user_12,25057
user_13,25112
user_14,25152
user_15,25212
user_16,25259
user_17,25304
user_18,25355
user_19,25405
user_20,25462
user_21,25501
user_22,25560
user_23,25607
user_24,25649
user_25,25714
user_26,25750
user_27,25803
user_28,25856
user_29,25911
user_30,25962
user_31,26011
user_32,26061
user_33,26109
user_34,26154
user_35,26214
user_36,26262
user_37,26315
user_38,26359
user_39,26410
user_40,26472
user_41,26518
user_42,26569
user_43,26615
user_44,26664
user_45,26734
user_46,26762
user_47,26830
user_48,26879
user_49,26031
user_50,26083
user_51,26129
user_52,26172
user_53,26232
user_54,26276
user_55,26327
user_56,26369
user_57,26427
user_58,26474
user_59,26520
user_60,26581
user_61,26629
user_62,26666
user_63,26722
user_64,26775
user_65,26834
user_66,26880
user_67,26925
user_68,26982
user_69,27031
user_70,27080
user_71,27130
user_72,27184
user_73,27224
user_74,27283
user_75,27338
user_76,27381
user_77,27432
user_78,27491
user_79,27536
user_80,27601
user_81,27640
user_82,27698
user_83,27742
user_84,27793
user_85,27844
user_86,27897
user_87,27946
user_88,27998
user_89,28057
user_90,28113
user_91,28154
user_92,28205
user_93,28256
user_94,28306
user_95,28363
user_96,27525
user_97,27562
user_98,27614
user_99,27662`

const test = (output) => {
  if (output !== expected) {
    throw new Error('Invalid CSV output!')
  }
}

module.exports = { test }