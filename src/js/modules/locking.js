const body = document.body;

export function bodyLocking(lockClass) {
    let className = lockClass ? lockClass : "lock";
    let lockPaddingValue = body.classList.contains(className)
        ? "0px"
        : window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";
    document.querySelectorAll('.lock-padding').forEach(lockItem => {
        lockItem.style.paddingRight = lockPaddingValue;
    })
    body.style.paddingRight = lockPaddingValue;
    body.classList.toggle(className);
}
