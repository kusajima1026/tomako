function sc(x){
    return document.getElementById(x).value
}

function set_timetable(){
    let el = {
        'MON':[sc('MON1'),sc('MON2'),sc('MON3'),sc('MON4'),sc('MON5'),sc('MON6')],
        'TUE':[sc('TUE1'),sc('TUE2'),sc('TUE3'),sc('TUE4'),sc('TUE5'),sc('TUE6')],
        'WED':[sc('WED1'),sc('WED2'),sc('WED3'),sc('WED4'),sc('WED5'),sc('WED6')],
        'THU':[sc('THU1'),sc('THU2'),sc('THU3'),sc('THU4'),sc('THU5'),sc('THU6')],
        'FRI':[sc('FRI1'),sc('FRI2'),sc('FRI3'),sc('FRI4'),sc('FRI5'),sc('FRI6')]
    }
    
    document.getElementById('output').innerHTML = el.MON+','+el.TUE+','+el.WED+','+el.THU+','+el.FRI
}

set_timetable()