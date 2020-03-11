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
        console.log(ko.toJS(dd));
    }
    a.DeleteQualification = function (dd) {
        a.Qualifications.remove(dd);
    }
    a.AddQualification = function () {
        if (a.validate()) {
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
    a.validate = function () {
        let err = "";
        if (ko.toJS(a.SelectedQualificationID()) == null && ko.toJS(a.SelectedQualificationID()) == undefined) {
            err += "Please select Qualifications\n";
        }
        if (ko.toJS(a.Marks()) == null && ko.toJS(a.Marks()) == undefined) {
            err += "Please Enter Marks.\n";
        } else if (a.Marks() < 40 || a.Marks() > 100) {
            err += "Marks must be between 40 and 100\n";
        }
        if (err == "") {
            return true;
        } else {
            alert(err);
            return false;
        }
    }
}
ko.applyBindings(new QualificationDoctors());