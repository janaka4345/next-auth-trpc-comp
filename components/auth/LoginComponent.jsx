"use client";
export default function LoginComponent({
  children,
  mode = "redirect",
  asChild,
}) {
  function handleClick() {
    console.log(mode);
  }
  // login higher order componnet
  // not neede for this project yet .
  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
}
