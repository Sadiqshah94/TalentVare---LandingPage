import {
  Menu,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  AppImages,
  routes,
  NavLink,
  X,
  InputField,
  useState,
} from "./index";

const Header = () => {
  const { logo } = AppImages;
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full bg-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container max-w-[1443px] mx-auto flex justify-between items-center">
        <div className="flex gap-8">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </NavLink>
          <nav
            className={`absolute lg:static top-16 left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0 lg:hidden xl:flex lg:items-center gap-4 transition-all duration-300 ease-in-out shadow-lg lg:shadow-none ${
              isOpen ? "block" : "hidden"
            } xl:block`}
          >
            <div className="lg:hidden mb-4">
              <InputField
                type="text"
                isInputWithIcon
                isBg
                imageUrl="/assets/imgs/Search.svg"
                labelCaption="Search"
              />
            </div>
            
            {/* desktop navigation  */}
            <ul className="flex flex-col lg:flex-row gap-0 lg:gap-6">
              {routes.map((items, index) => (
                <li key={index}>
                  <NavLink
                    to={items.path}
                    className={({ isActive }) =>
                      `text-gray text-xs md:text-sm lg:text-base font-neuehaas hover:text-primary ${
                        isActive ? "text-primary font-semibold" : ""
                      }`
                    }
                    onClick={handleNavClick}
                  >
                    {items.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>



        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Search Field (Hidden in Mobile) */}

          <div className="hidden lg:block">
            <InputField
              type="text"
              isInputWithIcon
              isBg
              imageUrl="/assets/imgs/Search.svg"
              labelCaption="Search"
            />
          </div>

          <Button className="py-4 px-3 font-normal bg-primary text-white flex items-center justify-center">
            Resume Builder
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Toggle Menu Button (Only for Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none xl:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
