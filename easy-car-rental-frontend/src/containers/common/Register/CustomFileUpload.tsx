export default function CustomFileUpload(props: any) {
  const { field, form } = props;

  const handleChange = async (e: any) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    let base64String;

    reader.onload = await function (event) {
      base64String = event.target?.result;
      form.setFieldValue(field.name, base64);
    };
  };

  return (
    <div>
      <input
        type={"file"}
        onChange={(o) => handleChange(o)}
        className={"form-control"}
      />
    </div>
  );
}
function base64(name: any, base64: any) {
  throw new Error("Function not implemented.");
}
