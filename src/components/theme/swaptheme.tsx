import { notify } from "./../../utils/notifications";
let test = "https://raw.githubusercontent.com/Pyca-cc/pycaswap/main/src/components/assets/theme/eclipse.jpg";


export const swapTheme = (
  theme: string,
) => {

  const body = document.body;

  if(test === theme){

    body.style.backgroundImage = "url("+theme+")";
    body.style.backgroundSize = "100%";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";

  } else {

    if (theme.toString().substring(0, 1) === "#" || theme === "black" || theme === "white" || theme === "grey"){

      body.style.removeProperty('background-image');
      body.style.backgroundColor = theme;

      notify({
        message: "Success load color config",
        type: "success",
        description: "Color : "+theme,
      });

    } else if (theme.toString().substring(0, 4) === "http"){

      body.style.removeProperty('background-color');
      body.style.backgroundImage = "url("+theme+")";
      body.style.backgroundSize = "100%";
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundAttachment = "fixed";

      notify({
        message: "Success load picture config",
        type: "success",
        description: "Picture link : "+theme,
      });
    } else {

      notify({
        message: "Unable to load your config",
        type: "error",
        description: "Please kindly check your value is either a link or a color",
      });

    }
    test=theme;
  }
};
