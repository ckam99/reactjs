import Toastly from "@msic89/toastly";

/**
 *
 * @param {*} array Array to paginate
 * @param {*} page_size  number of row to display
 * @param {*} page_number current page number
 */
export function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const toast = new Toastly({
    timeout: 4000,
    position: "bottom-right",
    dismissible: true,
});
