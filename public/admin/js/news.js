var buttonDelete = document.querySelectorAll("[button-delete]");
if(buttonDelete.length > 0) {

    const form = document.querySelector("#form-delete-item");
    const path = form.getAttribute("path");

    buttonDelete.forEach(button => {
        button.addEventListener("click", () => {
            const isConfirm = confirm("Bạn có chắc muốn xóa không");

            if(isConfirm) {
                const id = button.getAttribute("data-id");

                const action = `${path}/${id}?_method=DELETE`;
                form.action = action;
                console.log(action);
                form.submit();
            }
        });
    });
}
