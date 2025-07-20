import React from "react";
import { Button, Form, Input, Select, Space, Typography, Card } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const generateDefaultField = () => ({
  key: "field",
  type: "String",
  children: []
});

const FieldItem = ({ field, onChange, onDelete, level = 0 }) => {
  const handleKeyChange = (e) => {
    onChange({ ...field, key: e.target.value });
  };

  const handleTypeChange = (value) => {
    const updated = { ...field, type: value };
    if (value === "Nested" && !field.children) {
      updated.children = [];
    }
    onChange(updated);
  };

  const addNestedField = () => {
    const updated = {
      ...field,
      children: [...(field.children || []), generateDefaultField()],
    };
    onChange(updated);
  };

  const handleNestedFieldChange = (index, updatedField) => {
    const updatedChildren = [...field.children];
    updatedChildren[index] = updatedField;
    onChange({ ...field, children: updatedChildren });
  };

  const handleNestedDelete = (index) => {
    const updatedChildren = field.children.filter((_, i) => i !== index);
    onChange({ ...field, children: updatedChildren });
  };

  return (
    <Card 
      size="small" 
      style={{ 
        marginBottom: 12, 
        marginLeft: level * 24,
        border: "1px solid #d9d9d9",
        borderRadius: "6px"
      }}
      bodyStyle={{ padding: 12 }}
    >
      <Space>
        <Input
          value={field.key}
          onChange={handleKeyChange}
          placeholder="Field Name"
          style={{ width: 150 }}
        />
        <Select 
          value={field.type} 
          onChange={handleTypeChange} 
          style={{ width: 120 }}
        >
          {["String", "Number", "Nested"].map((type) => (
            <Option value={type} key={type}>{type}</Option>
          ))}
        </Select>
        <Button 
          icon={<DeleteOutlined />} 
          onClick={onDelete} 
          danger 
          size="small"
        />
      </Space>

      {field.type === "Nested" && (
        <div style={{ marginTop: 12 }}>
          {field.children?.map((child, index) => (
            <FieldItem
              key={index}
              field={child}
              onChange={(updated) => handleNestedFieldChange(index, updated)}
              onDelete={() => handleNestedDelete(index)}
              level={level + 1}
            />
          ))}
          <Button
            type="dashed"
            onClick={addNestedField}
            icon={<PlusOutlined />}
            size="small"
            style={{ marginTop: 8, marginLeft: level * 24 }}
          >
            Add Nested Field
          </Button>
        </div>
      )}
    </Card>
  );
};

export default FieldItem; 