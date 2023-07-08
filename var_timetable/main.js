function sc(x){
    return document.getElementById(x)
}

let el = {
    'MON':[sc('MON1'),sc('MON2'),sc('MON3'),sc('MON4'),sc('MON5'),sc('MON6')],
    'TUE':[sc('TUE1'),sc('TUE2'),sc('TUE3'),sc('TUE4'),sc('TUE5'),sc('TUE6')],
    'WED':[sc('WED1'),sc('WED2'),sc('WED3'),sc('WED4'),sc('WED5'),sc('WED6')],
    'THU':[sc('THU1'),sc('THU2'),sc('THU3'),sc('THU4'),sc('THU5'),sc('THU6')],
    'FRI':[sc('FRI1'),sc('FRI2'),sc('FRI3'),sc('FRI4'),sc('FRI5'),sc('FRI6')]
}

let subject = ['公共','体育','気回','科人','LHR','CI','現国','数I','HD','工基','保健','美術','情数']
subject['a'] = ''

/*

0 公共
1 体育
2 気回
3 科人
4 LHR
5 CI
6 現国
7 数I
8 HD
9 工基
10 保健
11 美術
12 情数
a [空白]

*/

function ok(){
    let input = sc('enter').value.split(',')

    el.MON[0].innerHTML = subject[input[0]]
    el.MON[1].innerHTML = subject[input[1]]
    el.MON[2].innerHTML = subject[input[2]]
    el.MON[3].innerHTML = subject[input[3]]
    el.MON[4].innerHTML = subject[input[4]]
    el.MON[5].innerHTML = subject[input[5]]

    el.TUE[0].innerHTML = subject[input[6]]
    el.TUE[1].innerHTML = subject[input[7]]
    el.TUE[2].innerHTML = subject[input[8]]
    el.TUE[3].innerHTML = subject[input[9]]
    el.TUE[4].innerHTML = subject[input[10]]
    el.TUE[5].innerHTML = subject[input[11]]

    el.WED[0].innerHTML = subject[input[12]]
    el.WED[1].innerHTML = subject[input[13]]
    el.WED[2].innerHTML = subject[input[14]]
    el.WED[3].innerHTML = subject[input[15]]
    el.WED[4].innerHTML = subject[input[16]]
    el.WED[5].innerHTML = subject[input[17]]

    el.THU[0].innerHTML = subject[input[18]]
    el.THU[1].innerHTML = subject[input[19]]
    el.THU[2].innerHTML = subject[input[20]]
    el.THU[3].innerHTML = subject[input[21]]
    el.THU[4].innerHTML = subject[input[22]]
    el.THU[5].innerHTML = subject[input[23]]

    el.FRI[0].innerHTML = subject[input[24]]
    el.FRI[1].innerHTML = subject[input[25]]
    el.FRI[2].innerHTML = subject[input[26]]
    el.FRI[3].innerHTML = subject[input[27]]
    el.FRI[4].innerHTML = subject[input[28]]
    el.FRI[5].innerHTML = subject[input[29]]
}