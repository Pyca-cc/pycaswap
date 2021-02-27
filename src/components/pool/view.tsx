import React from "react";
import { Button, Popover, ConfigProvider, Empty } from "antd";
import { useOwnedPools } from "../../utils/pools";
import { Settings } from "./../settings";
import { SettingOutlined } from "@ant-design/icons";
import { AppBar } from "./../appBar";
import { useWallet } from "../../utils/wallet";
import { PoolCard } from "./card";
import { MigrationModal } from "../migration";

export const PoolOverview = () => {
  const owned = useOwnedPools();
  const { connected } = useWallet();

  return (
    <>
      <AppBar
        right={
          <Popover
            placement="topRight"
            title="Settings"
            content={<Settings />}
            trigger="click"
          >
            <Button
              shape="circle"
              size="large"
              type="text"
              icon={<SettingOutlined />}
            />
          </Popover>
        }
      />

      {!connected && <h3>Connect to a wallet to view your liquidity. </h3>}

        <ConfigProvider
          renderEmpty={() => (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No liquidity found."
            />
          )}
        >
        <div className="pool-grid">

        {owned.map((o) => (
          <PoolCard
            key={o.pool.pubkeys.account.toBase58()}
            pool={o.pool}
            account={o.account}
          />
        ))}

        </div>

        </ConfigProvider>
      <MigrationModal />
    </>
  );
};
