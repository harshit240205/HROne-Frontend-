import React, { useState } from "react";
import { Button, Divider, Typography, Tabs, Card, Space } from "antd";
import { PlusOutlined, CodeOutlined, FormOutlined } from "@ant-design/icons";
import FieldItem from "./FieldItem";

const { Title } = Typography;
const { TabPane } = Tabs;

const generateDefaultField = () => ({
  key: "field",
  type: "String",
  children: []
});

const SchemaBuilder = () => {
  const [fields, setFields] = useState([generateDefaultField()]);

  const handleFieldChange = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, generateDefaultField()]);
  };

  const handleDeleteField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const generateSchema = (fields) => {
    const schema = {};
    fields.forEach((f) => {
      if (!f.key) return;
      if (f.type === "Nested") {
        schema[f.key] = generateSchema(f.children || []);
      } else {
        schema[f.key] = f.type === "String" ? "" : 0;
      }
    });
    return schema;
  };

  const schemaJson = generateSchema(fields);

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
        JSON Schema Builder
      </Title>

      <Tabs defaultActiveKey="builder" size="large">
        <TabPane 
          tab={
            <span>
              <FormOutlined />
              Schema Builder
            </span>
          } 
          key="builder"
        >
          <Card style={{ marginBottom: 16 }}>
            <Title level={4}>Define Your Schema</Title>
            <p style={{ color: '#666', marginBottom: 16 }}>
              Add fields to build your JSON schema. You can create nested objects by selecting "Nested" type.
            </p>
            
            {/* Render all top-level fields */}
            {fields.map((field, index) => (
              <FieldItem
                key={index}
                field={field}
                onChange={(updated) => handleFieldChange(index, updated)}
                onDelete={() => handleDeleteField(index)}
              />
            ))}

            <Button
              type="dashed"
              onClick={handleAddField}
              icon={<PlusOutlined />}
              size="large"
              style={{ marginTop: 16, width: '100%' }}
            >
              Add Field
            </Button>
          </Card>
        </TabPane>

        <TabPane 
          tab={
            <span>
              <CodeOutlined />
              JSON Preview
            </span>
          } 
          key="json"
        >
          <Card>
            <Title level={4}>Generated JSON Schema</Title>
            <p style={{ color: '#666', marginBottom: 16 }}>
              This is the real-time JSON output based on your schema definition.
            </p>
            <pre 
              style={{ 
                background: "#f6f8fa", 
                padding: "20px", 
                borderRadius: "8px",
                border: "1px solid #e1e4e8",
                fontSize: "14px",
                lineHeight: "1.5",
                overflow: "auto",
                maxHeight: "500px"
              }}
            >
              {JSON.stringify(schemaJson, null, 2)}
            </pre>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default SchemaBuilder;
