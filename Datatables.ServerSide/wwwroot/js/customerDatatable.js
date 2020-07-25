$(document).ready(function () {
    $("#customerDatatable").DataTable({
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/api/customer",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "ID", "name": "ID", "autoWidth": true },
            { "data": "FirstName", "name": "First Name", "autoWidth": true },
            { "data": "LastName", "name": "Last Name", "autoWidth": true },
            { "data": "Contact", "name": "Country", "autoWidth": true },
            { "data": "Email", "name": "Email", "autoWidth": true },
            { "data": "DateOfBirth", "name": "Date Of Birth", "autoWidth": true },
            {
                "render": function (data, type, full, meta) { return "<a href='#' class='btn btn-danger' onclick=DeleteCustomer('" + row.ID + "'); >Delete</a>";   }
            },
        ]

    });
});  