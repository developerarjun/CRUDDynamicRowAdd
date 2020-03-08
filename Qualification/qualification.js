function Qualification(data) {
    var a = this;
    a.DoctorId = ko.observable(data.DoctorId);
    a.QualId = ko.observable(data.QualId);
    a.QualName = ko.observable(data.QualName);
    a.Marks = ko.observable(data.Marks);
    a.Action = ko.observable(data.Action);
}
function QualificationList(data) {
    var a = this;
    a.QualId = ko.observable(data.QualId);
    a.QualName = ko.observable(data.QualName);
}
var QualificationDoctors = function () {
    var a = this;
    a.QualificationLists = ko.observableArray([]);
    a.Qualifications = ko.observableArray([]);
    a.SelectedQualificationID = ko.observable();
    let objs = [
        { DoctorId: 1,QualId: 1, QualName: 'SLC',Marks: 50 },
        { DoctorId: 1, QualId: 2, QualName: '10+2', Marks: 50 },
        { DoctorId: 1, QualId: 3, QualName: 'Bachelor', Marks: 50 },
    ];
    var mappedTasks = $.map(objs, function (items) {
        return new Qualification(items)
    });
    a.Qualifications(mappedTasks);
    let obj = [
        { QualId: 1, QualName: 'SLC' },
        { QualId: 2, QualName: '10+2' },
        { QualId: 3, QualName: 'Bachelor' },
    ];
    console.log(obj);
    var mappedTask = $.map(obj, function (item) {
        return new QualificationList(item)
    });
    a.QualificationLists(mappedTask);
    a.QualName = ko.observable();
    a.Marks = ko.observable();
    a.EditQualification = function (dd) {
        console.log(dd);
    }
    a.DeleteQualification = function (dd) {
        console.log(dd);
    }
    a.AddQualification = function () {
        console.log(a.SelectedQualificationID());
        var data = {
            DoctorId: 1,
            QualId: ko.toJS(a.SelectedQualificationID()).QualId,
            QualName: ko.toJS(a.SelectedQualificationID()).QualName,
            Marks: a.Marks() 
        };
        a.Qualifications.push(new Qualification(data));
        a.SelectedQualificationID(null);
        a.Marks(null);
    }
}
    ko.applyBindings(new QualificationDoctors());