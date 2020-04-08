$(document).ready(function () {
    $('#btn_test').click(function () {
        $('#table').DataTable({
            ajax: 'mock.json',
            columns: [
                { data: "name" },
                {
                    render: function (data, type, row) {
                        return '<button onclick="onRowSelected(' + row.id + ')">选择</button>';
                    }
                }
            ]
        });
    });
});

function onRowSelected(rowId) {
    alert(rowId);
}