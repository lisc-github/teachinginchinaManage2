/**
 * Created by admin on 2017/4/19.
 */
$(window).ready(function () {
    var nav = $(".list a");
    var container = $(".container");
    var forms = $(".forms");
    var tableBox = $(".table_box");
    //翻页
    nav.each(function (i) {
        $(this).on("click",function () {
            nav.each(function(){
                $(this).css("background","");
            });
            container.each(function(){
                $(this).css("display","none");
            });
            $(this).css("background","#fff");
            container.eq(i).css("display","block");
        })
    });

    //点击透明层申请表消失
    forms.click(function(){
        $(this).hide();
    });
    tableBox.click(function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }
        else{
            event.cancelBubble = true;
        }
    });


    var tds = $(".table_box td");
    tds.each(function(i){
        if(!$.trim(tds.eq(i).html())){
            tds.eq(i).css("color","#999");
        }
    });

    $(".blue").each(function (i) {
        $(this).click(function () {
            console.log(forms)
            {
                var json = {
                    "ID1":1,
                    "FirstName2":"li",
                    "MiddleName3":"",
                    "LasterName4":"wx",
                    "Email5":"li_w_x@163.com",
                    "certificationsYesorno6":0,
                    "certifications7":"00",
                    "ForeignLanguageYesorno8":0,
                    "ForeignLanguage9":"0",
                    "Occupation10":0,
                    "Other11":"0",
                    "EmployerName12":"0",
                    "Phone13":"(0)--",
                    "InstitutionName14":"0",
                    "Institution15":"",
                    "InstitutionYesorno16":1,
                    "Attended117":"0//",
                    "Attended218":"0//",
                    "Graduation19":"MM/DD/YYYY",
                    "IDo20":0,
                    "Departure21":"",
                    "Classification22":1,
                    "Specialization23":"0",
                    "Birthday24":"10/06/1976",
                    "Gender25":1,
                    "Countryofbirth26":"China",
                    "Stateofbirth27":"ZJ",
                    "Ethnicity28":1,
                    "Countryofcitizenship29":"0000",
                    "Streetaddres30":"000",
                    "City31":"000",
                    "State32":"00",
                    "Zipcode33":"310012",
                    "Streetaddres234":"00",
                    "City235":"0",
                    "State236":"0",
                    "Zipcode237":"000",
                    "Email138":"0",
                    "Phone139":"(0)--",
                    "Cell140":"(0)--",
                    "ContactName41":"0",
                    "Ralationship42":"0",
                    "ContactEmail43":"0",
                    "Contactphone44":"(0)--",
                    "PassportUrl45":"20170211161847783.jpg",
                    "ExpiryDate46":"00//",
                    "PassportNumber47":"0",
                    "IssueDate48":"0//",
                    "IssuingCountry49":"0",
                    "IssuingCity50":"0",
                    "Friends51":"",
                    "Placednear52":"",
                    "Institutionlevel153":2,
                    "Institutionlevel254":1,
                    "Institutionlevel355":0,
                    "Teachinglocation56":"0",
                    "Refemail157":"0",
                    "Refphone158":"(0)--",
                    "Refprefix159":1,
                    "Reffirstname160":"0",
                    "Reflastername161":"",
                    "RefOrganization162":"0",
                    "RefPosition163":"0",
                    "Refemail264":"0",
                    "Refphone265":"(0)--",
                    "Refprefix266":1,
                    "Reffirstname267":"0",
                    "Reflastername268":"0",
                    "RefOrganization269":"0",
                    "RefPosition270":"0"
                };
                $("#firstName").html(json.FirstName2);
                $("#middleName").html(json.MiddleName3);
                $("#lastName").html(json.LasterName4);
                $("#email").html(json.Email5);
                $("#birthDate").html(json.Birthday24);
                switch(json.Gender25){
                    case 0:
                        json.Gender25 = "male";
                        break;
                    case 1:
                        json.Gender25 = "female";
                }
                $("#gender").html(json.Gender25);
                $("#birthCountry").html(json.Countryofbirth26);
                $("#birthState").html(json.Stateofbirth27);
                switch(json.Ethnicity28){
                    case 0:
                        json.Ethnicity28 = "Decline To Answer";
                        break;
                    case 1:
                        json.Ethnicity28 = "Asian or Pacific Islander";
                        break;
                    case 2:
                        json.Ethnicity28 = "Black or African American";
                        break;
                    case 3:
                        json.Ethnicity28 = "Hispanic or Latino (a)";
                        break;
                    case 4:
                        json.Ethnicity28 = "Multiracial";
                        break;
                    case 5:
                        json.Ethnicity28 = "Native American/Alaska Native";
                        break;
                    case 6:
                        json.Ethnicity28 = "White";
                        break;
                }
                $("#ethnicity").html(json.Ethnicity28);
                $("#citizenshipCountry").html(json.Countryofcitizenship29);
                $("#homeStreet").html(json.Streetaddres30);
                $("#homeCity").html(json.City31);
                $("#homeState").html(json.State32);
                $("#homeZiCode").html(json.Zipcode33);
                $("#mailingStreet").html(json.Streetaddres234);
                $("#mailingCity").html(json.City235);
                $("#mailingState").html(json.State236);
                $("#mailingZipCode").html(json.Zipcode237);
                $("#mailingEmail").html(json.Email138);
                $("#mailingPhone").html(json.Phone139);
                $("#mailingCellNumber").html(json.Cell140);
                $("#emergencyName").html(json.ContactName41);
                $("#emergencyRelationship").html(json.Ralationship42);
                $("#emergencyEmail").html(json.ContactEmail43);
                $("#emergencyPhone").html(json.Contactphone44);
                switch(json.certificationsYesorno6){
                    case 0:
                        json.certificationsYesorno6 = "yes";
                        break;
                    case 1:
                        json.certificationsYesorno6 = "no";
                        json.certifications7 = '';
                }
                $("#anyDegree").html(json.certificationsYesorno6+" "+json.certifications7);
                switch(json.ForeignLanguageYesorno8){
                    case 0:
                        json.ForeignLanguageYesorno8 = "yes";
                        break;
                    case 1:
                        json.ForeignLanguageYesorno8 = "no";
                        json.ForeignLanguage9 = '';
                }
                $("#certified").html(json.ForeignLanguageYesorno8+" "+json.ForeignLanguage9);
                switch(json.Occupation10){
                    case 0:
                        json.Occupation10 = "teacher";
                        break;
                    case 1:
                        json.Occupation10 = "student";
                        break;
                    case 2:
                        json.Occupation10 = json.Other11;

                }
                $("#CurrentOccupation").html(json.Occupation10);
                $("#EmployerName").html(json.EmployerName12);
                $("#EmployerPhone").html(json.Phone13);
                $("#InstitutionName").html(json.InstitutionName14);
                switch(json.Classification22){
                    case 0:
                        json.Classification22 = "Associate of Arts (AA)";
                        break;
                    case 1:
                        json.Classification22 = "Associate of Arts in Teaching (AAT)";
                        break;
                    case 2:
                        json.Classification22 = "Associate of Engineering Science (AES)";
                        break;
                    case 3:
                        json.Classification22 = "Associate of Fine Arts (AFA)";
                        break;
                    case 4:
                        json.Classification22 = "Associate of Science (AS)";
                        break;
                    case 5:
                        json.Classification22 = "Associate of Applied Science (AAS)";
                        break;
                    case 6:
                        json.Classification22 = "Bachelor of Arts (BA)";
                        break;
                    case 7:
                        json.Classification22 = "Bachelor of Fine Arts (BFA)";
                        break;
                    case 8:
                        json.Classification22 = "Bachelor of Business Administration (BBA)";
                        break;
                    case 9:
                        json.Classification22 = "Bachelor of Business Administration (BBA)";
                        break;
                    case 10:
                        json.Classification22 = "Bachelor of Science (BS)";
                        break;
                    case 11:
                        json.Classification22 = "Master of Arts (MA)";
                        break;
                    case 12:
                        json.Classification22 = "Master of Science (MS)";
                        break;
                    case 13:
                        json.Classification22 = "Master of Education (M.Ed.)";
                        break;
                    case 14:
                        json.Classification22 = "Master of Business Administration (MBA)";
                        break;
                    case 15:
                        json.Classification22 = "Professional Doctorate";
                        break;
                    case 16:
                        json.Classification22 = "Research Doctorate";
                }
                switch(json.IDo20){
                    case 0:
                        json.IDo20 = "yes";
                        break;
                    case 1:
                        json.IDo20 = "no";
                }
                switch(json.InstitutionYesorno16){
                    case 0:
                        json.InstitutionYesorno16 = "yes";
                        $("#yesDateAttended").html(json.Attended117+"-"+json.Attended218);
                        $("#yesTypeOfDegree").html(json.Classification22);
                        $("#yesMajor").html(json.Specialization23);

                        break;
                    case 1:
                        json.InstitutionYesorno16 = "no";
                        $("#noTypeofDegree").html(json.Classification22);
                        $("#noMajor").html(json.Specialization23);
                        $("#noGraduationDate").html(json.Graduation19);
                        $("#noyearsCompleted").html(json.Departure21);
                        $("#noPlanGraduate").html(json.IDo20);
                }
                $("#graduateForm").html(json.InstitutionYesorno16);


                $("#pic").html("<img src="+json.PassportUrl45+"/>");
                $("#passportExpiry").html(json.ExpiryDate46);
                $("#passportNumber").html(json.PassportNumber47);
                $("#passportIssue").html(json.IssueDate48);
                $("#issueCountry").html(json.IssuingCountry49);
                $("#issueCity").html(json.IssuingCity50);
                $("#partner").html(json.Friends51);
                $("#place").html(json.Placednear52);

                switch(json.Institutionlevel153){
                    case 0:
                        json.Institutionlevel153 = "Kindergarten/Elementary";
                        break;
                    case 1:
                        json.Institutionlevel153 = "Junior High/High School";
                        break;
                    case 2:
                        json.Institutionlevel153 = "University";
                }
                switch(json.Institutionlevel254){
                    case 0:
                        json.Institutionlevel254 = "Kindergarten/Elementary";
                        break;
                    case 1:
                        json.Institutionlevel254 = "Junior High/High School";
                        break;
                    case 2:
                        json.Institutionlevel254 = "University";
                }
                switch(json.Institutionlevel355){
                    case 0:
                        json.Institutionlevel355 = "Kindergarten/Elementary";
                        break;
                    case 1:
                        json.Institutionlevel355 = "Junior High/High School";
                        break;
                    case 2:
                        json.Institutionlevel355 = "University";
                }

                $("#firstChoice").html(json.Institutionlevel153);
                $("#secondChoice").html(json.Institutionlevel254);
                $("#thirdChoice").html(json.Institutionlevel355);
                $("#consideration").html(json.Teachinglocation56);
                $("#AEmail").html(json.Refemail157);
                $("#APhone").html(json.Refphone158);
                switch(json.Refprefix159){
                    case 0:
                        json.Refprefix159 = "Mr.";
                        break;
                    case 1:
                        json.Refprefix159 = "Ms.";
                        break;
                    case 2:
                        json.Refprefix159 = "Mrs.";
                        break;
                    case 3:
                        json.Refprefix159 = "Dr.";
                        break;
                    case 4:
                        json.Refprefix159 = "Prof.";
                        break;
                    case 5:
                        json.Refprefix159 = "Other";
                }
                switch(json.Refprefix266){
                    case 0:
                        json.Refprefix266 = "Mr.";
                        break;
                    case 1:
                        json.Refprefix266 = "Ms.";
                        break;
                    case 2:
                        json.Refprefix266 = "Mrs.";
                        break;
                    case 3:
                        json.Refprefix266 = "Dr.";
                        break;
                    case 4:
                        json.Refprefix266 = "Prof.";
                        break;
                    case 5:
                        json.Refprefix266 = "Other";
                }
                $("#APrefix").html(json.Refprefix159);
                $("#AFirstName").html(json.Reffirstname160);
                $("#ALastName").html(json.Reflastername161);
                $("#AOrganization").html(json.RefOrganization162);
                $("#APosition").html(json.RefPosition163);
                $("#BEmail").html(json.Refemail264);
                $("#BPhone").html(json.Refphone265);
                $("#BPrefix").html(json.Refprefix266);
                $("#BFirstName").html(json.Reffirstname267);
                $("#BLastName").html(json.Reflastername268);
                $("#BOrganization").html(json.RefOrganization269);
                $("#BPosition").html(json.RefPosition270);

            }
            forms.show();
        })
    });
});