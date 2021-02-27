import React, { useEffect, useState } from "react";
import { Select, Button, Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { THEME, useThemeConfig } from "./../../utils/connection";
import { StringInput } from "./../stringInput";

export const Theme = () => {

  const { theme, setTheme } = useThemeConfig();
  const [value, setValue] = useState(theme.toString());

  useEffect(() => {
    setValue(theme.toString());
  }, [theme]);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

    <div style={{ display: "grid" }}>
    Default theme:{" "}
    <Select
    onSelect={setTheme}
    value={theme}
    style={{ marginRight: 8 }}
    >
    {THEME.map(({ name }) => (
      <Select.Option value={name} key={name}>
      {name}
      </Select.Option>
    ))}
    </Select>
    <div style={{ display: "grid" }}>
    Hex color or picture link:{" "}
    <StringInput
    className="slippageInput"
    placeholder={value}
    value={value}
    onChange={(val: any) => {
      setValue(val);
      setTheme(val);
    }}
    />
    </div>
    </div>

    <Popover
      trigger="hover"
      content={
        <div style={{ width: 300 }}>
          You can change theme backgroud. Just past your html hex color
          (ex: #663b3b) or you can past a picture link or gif like
          https://static.blog4ever.com/2006/01/59386/artfichier_59386_7149691_201705111712996.gif
        </div>
      }
    >
    <Button
      shape="circle"
      size="large"
      type="text"
      className={"theme-info-button"}
      icon={<InfoCircleOutlined />}
    />
    </Popover>

    </div>
  );
};
