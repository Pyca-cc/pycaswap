import React from "react";
import { Button, Menu, Popover } from "antd";
import { useWallet } from "../utils/wallet";
import { AccountInfo } from "./accountInfo";
import { Link, useLocation } from "react-router-dom";

export const AppBar = (props: { left?: JSX.Element; right?: JSX.Element }) => {
  const { connected, wallet } = useWallet();
  const location = useLocation();

  const TopBar = (
    <div className="App-Bar">

      <div className="App-Bar-left">

        <div className="App-logo">
          <a
            className="appLogoLink"
            href={"https://pyca.cc"}
            target="_blank"
            rel="noopener noreferrer"
            >
          </a>
        </div>
        <Menu mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Swap
            </Link>
          </Menu.Item>
          <Menu.Item key="/add">
            <Link
              to={{
                pathname: "/add",
              }}
            >
              Pool
            </Link>
          </Menu.Item>
          <Menu.Item key="/info">
            <Link
              to={{
                pathname: "/info",
              }}
            >
              Charts
            </Link>
          </Menu.Item>
          <Menu.Item key="trade">
            <a
              href={"https://dex.projectserum.com"}
              target="_blank"
              rel="noopener noreferrer"
            >




              <sup></sup>
            </a>
          </Menu.Item>
          <Menu.Item key="help">
            <a
              href={"https://serum-academy.com/en/serum-swap/"}
              target="_blank"
              rel="noopener noreferrer"
            >




              <sup></sup>
            </a>
          </Menu.Item>
        </Menu>
        {props.left}

</div>

      <div className="App-Bar-right">
        <AccountInfo />
        <div>
          {!connected && (
            <Button
              type="text"
              size="large"
              onClick={connected ? wallet.disconnect : wallet.connect}
              className="connectButton"
            >
              Connect
            </Button>
          )}
          {connected && (
            <Popover
              placement="bottomRight"
              title="Wallet public key"
              trigger="click"
            ></Popover>
          )}
        </div>
        {props.right}
      </div>
    </div>
  );

  return TopBar;
};
