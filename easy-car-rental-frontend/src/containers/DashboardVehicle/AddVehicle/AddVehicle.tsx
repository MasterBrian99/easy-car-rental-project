import React from "react";
import styles from "./style.module.scss";
import { Formik, Form, Field, FormikProps } from "formik";
import { VehicleProp } from "../../../interface/interface";
import * as Yup from "yup";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  vehicle_Registration_number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const AddVehicle = () => {
  const initialValues: VehicleProp = {
    vehicle_Registration_number: "",
    vehicle_brand: "",
    vehicle_type: "",
    vehicle_image_front_view: "",
    vehicle_image_back_view: "",
    vehicle_image_side_view: "",
    vehicle_image_interior_view: "",
    vehicle_color: "",
    vehicle_No_Of_Passengers: 0,
    vehicle_transmission_type: "",
    vehicle_Fuel_Type: "",
    vehicle_Daily_Rate: 0,
    vehicle_Monthly_Rate: 0,
    vehicle_Free_Km_for_a_Day: 0,
    vehicle_Free_Km_for_a_month: 0,
    vehicle_Price_per_Extra_KM: 0,
    vehicle_Current_KM: 0,
    available: "",
  };
  return (
    <div className={styles.main}>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="vehicle_Registration_number">First Name</label>
            <Field
              id="vehicle_Registration_number"
              name="vehicle_Registration_number"
              placeholder="vehicle_Registration_number"
            />

            <label htmlFor="vehicle_brand">First Name</label>
            <Field
              id="vehicle_brand"
              name="vehicle_brand"
              placeholder="vehicle_brand"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddVehicle;
