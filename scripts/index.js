function make_old(element) {
    element.classList.add("old");
    element.classList.remove("new");
}

function make_new(element) {
    element.classList.remove("old");
    element.classList.add("new");
}
/**
 * @brief 
 * @param {HTMLElement} old_element 
 * @param {HTMLElement} new_element 
 * @param {Boolean} left 
 */
function slide(old_element, new_element) {
    make_old(old_element);
    make_new(new_element);
}

function arrow_activation(arrow) {
    arrow.classList.remove("deactivated");
}

function arrow_deactivation(arrow) {
    arrow.classList.add("deactivated");
}

function handle_click(left, max, min, current) {
    let left_arrow = document.getElementById("left-arrow");
    let right_arrow = document.getElementById("right-arrow")
    if(left) {
        if(current < min) return; ///impossible
        if(current === min) { ///deactivate the arrow
            arrow_deactivation(left_arrow);
            return;
        }
        arrow_activation(right_arrow);
        arrow_activation(left_arrow);
        return;
    }
    if(current > max) return; ///impossible
        if(current === max) { ///deactivate the arrow
            arrow_deactivation(right_arrow);
            return;
        }
        arrow_activation(left_arrow);
        arrow_activation(right_arrow);
}
}