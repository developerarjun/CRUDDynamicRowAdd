<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Qualification.aspx.vb" Inherits="Qualification.Qualification" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
        <head runat="server">
        <title></title>
        <script src="Scripts/jquery-3.4.1.js"></script>
        <script src="Scripts/knockout-3.5.1.js"></script>
        </head>
        <body>
        <form id="form1" runat="server">
        <div>
        <div id="wrapper">
        <table align='center' cellspacing=2 cellpadding=5 id="data_table" border=1>
        <tr>
        <th>Qual Name:</th>
        <th>Marks</th>
        <th>Action</th>
        </tr>
        <tbody data-bind="foreach: Qualifications()">
            <td>
                <div data-bind="if: !editable()">
                    <span id="qualName" data-bind="text: QualName"></span>
                </div>
                <div data-bind="if: editable()">
                   <select  class="dropdown-select"
                    data-bind="
                    options:QualificationLists,
                    optionsText: 'QualName',
                    optionsValue: $data,
                    value:UpdateQualification, 
                    optionsCaption:'---choose---'">
               </select>
                </div>
                </div>
            </td>
            <td>
                <div data-bind="if: !editable()">
                    <span id="marks" data-bind="text: Marks"></span>
                </div>
                <div data-bind="if: editable()">
                    <input type="text" data-bind="value: Mark">
                </div>
            </td>
            <td>
                <div data-bind="if: !editable()">
                    <input type="button" class="add"  data-bind= "click: $root.EditQualification" value="Edit Qualification">
                </div>
                <div data-bind="if: editable()">
                    <input type="button" class="add" data-bind= "click: $root.UpdateQual" value="Update Qualification">
                </div>
                 <input type="button" class="add"  data-bind="click: $root.DeleteQualification"  value="Delete Qualification">
            </td>
        </tbody>
        <tr>
            <td>
               <select  class="dropdown-select"
                    data-bind="
                    options:QualificationLists,
                    optionsText: 'QualName',
                    optionsValue: $data,
                    value:SelectedQualificationID, 
                    optionsCaption:'---choose---'">
               </select>
            </td>
            <td>
                <input type="text" data-bind="value: Marks">
            </td>
            <td>
                <input type="button" class="add" data-bind="click: AddQualification"   value="Add Row">
               <%-- onclick="add_row();" --%>
            </td>
        </tr>
        </table>
        </div>
        </div>
        </form>
        </body>
        <script src="qualification.js"></script>
        </html>