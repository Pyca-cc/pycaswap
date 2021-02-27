import React from "react";
import { Input } from "antd";

export class StringInput extends React.Component<any, any> {

  onChange = (e: any) => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <Input
        {...this.props}
        onChange={this.onChange}
        maxLength={500}
      />
    );
  }
}
