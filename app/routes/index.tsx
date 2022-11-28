import { Button, Select } from "@fieldmade/ui";

export default function Index() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center space-y-12">
      <Button variation="primary">Hello World</Button>
      <Select
        className="w-64"
      options={[
        {
          label: 'Yellow',
          value: 'yellow'
        },
        {
          label: 'Blue',
          value: 'blue'
        },
        {
          label: 'Green',
          value: 'green'
        },
        {
          label: 'Pink',
          value: 'pink'
        },
        {
          label: 'Purple',
          value: 'purple'
        },
        {
          label: 'Orange',
          value: 'orange'
        },
        {
          label: 'Gray',
          value: 'gray'
        },
        {
          label: 'Indigo',
          value: 'indigo'
        },
        {
          label: 'White',
          value: 'white'
        },
        {
          label: 'Magenta',
          value: 'magenta'
        }
      ]}
      value={{
        label: 'Yellow',
        value: 'yellow'
      }}
    />
    </div>
  );
}
