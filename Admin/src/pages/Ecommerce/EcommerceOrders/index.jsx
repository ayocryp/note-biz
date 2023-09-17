import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "../../../components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";
import Spinners from "../../../components/Common/Spinner";

// Import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import DeleteModal from "../../../components/Common/DeleteModal";
import EcommerceOrdersModal from "./EcommerceOrdersModal";

import {
  getPlans as onGetPlans,
  updatePlan as onUpdatePlan,
  deletePlan as onDeletePlan,
} from "/src/store/e-commerce/actions"; // Check the import path

// Redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

import {
  
  PlanId,
  Name,
  Price,
  Duration,
  Interval,
  DisplayInterval,
  Features,
  Recommended,
  Enabled,
  Order,
} from "./EcommerceOrderCol";

import {
  Button,
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
} from "reactstrap";
import { ToastContainer } from "react-toastify";
import moment from "moment";

// Import Flatpickr
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

function EcommerceOrder() {
  // Meta title
  document.title = "PLANS";

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [planList, setPlanList] = useState([]);
  const [plan, setPlan] = useState(null);

  // Validation
  const validation = useFormik({
    // Enable reinitialize: use this flag when initial values need to be changed
    enableReinitialize: true,

    initialValues: {
      planId: plan ? plan.planId : "",
      name: plan ? plan.name : "",
      price: plan ? plan.price : "",
      duration: plan ? plan.duration : "",
      interval: plan ? plan.interval : "",
      display_interval: plan ? plan.display_interval : "",
      features: plan ? plan.features : "",
      recommended: plan ? plan.recommended : "",
      order: plan ? plan.order : "",
      enabled: plan ? plan.enabled : "",
    },
    validationSchema: Yup.object({
      // Update the validation schema according to your requirements
      planId: Yup.string().required("Please enter Plan ID"),
      name: Yup.string().required("Please enter Name"),
      price: Yup.number().required("Please enter Price"),
      duration: Yup.string().required("Please enter Duration"),
      interval: Yup.string().required("Please enter Interval"),
      display_interval: Yup.string().required("Please enter Display Interval"),
      features: Yup.string().required("Please enter Features"),
      recommended: Yup.string().required("Please enter Recommended"),
      enabled: Yup.string().required("Please enter Enabled"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      if (isEdit) {
        const updatedPlan = {
          planId: values.planId,
          name: values.name,
          price: values.price,
          duration: values.duration,
          interval: values.interval,
          display_interval: values.display_interval,
          features: values.features,
          recommended: values.recommended,
          order: values.order,
          enabled: values.enabled,
        };
        // Dispatch update action
        dispatch(onUpdatePlan(updatedPlan));
      } else {
        const newPlan = {
          planId: values.planId,
          name: values.name,
          price: values.price,
          duration: values.duration,
          interval: values.interval,
          display_interval: values.display_interval,
          features: values.features,
          recommended: values.recommended,
          order: values.order,
          enabled: values.enabled,
        };
        // Dispatch add action
        dispatch(onAddNewPlan(newPlan));
      }
      toggle();
    },
  });

  const dispatch = useDispatch();

  const selectPlansState = (state) => state.ecommerce;
  const PlansProperties = createSelector(
    selectPlansState,
    (ecommerce) => ({
      plans: ecommerce.plans,
      loading: ecommerce.loading,
    })
  );

  const { plans, loading } = useSelector(PlansProperties);

  const [isLoading, setLoading] = useState(loading);

  useEffect(() => {
    if (isEmpty(plans)) {
      dispatch(onGetPlans());
    }
  }, [dispatch, plans]);

  useEffect(() => {
    setPlanList(plans);
  }, [plans]);

  useEffect(() => {
    if (!isEmpty(plans) && isEdit) {
      setPlanList(plans);
      setIsEdit(false);
    }
  }, [plans, isEdit]);

  const toggle = () => {
    if (modal) {
      setModal(false);
      setPlan(null);
    } else {
      setModal(true);
    }
  };

   //delete order
   const [deleteModal, setDeleteModal] = useState(false);

   const onClickDelete = (plan) => {
     setPlan(plan);
     setDeleteModal(true);
   };
 
   const handledeletePlan = () => {
     if (plan && plan.id) {
       dispatch(onDeletePlan(plan.id));
       setDeleteModal(false);
       setPlan("");
     }
   }; 

   const handleOrderClicks = () => {
    setPlanList("");
    setIsEdit(false);
    toggle();
  };

  const handlePlanClick = (selectedPlan) => {
    setPlan(selectedPlan);
    setIsEdit(true);
    toggle();
  };


  const columns = useMemo(
    () => [
      {
        Header: () => <div className="form-check font-size-16" >
          <input className="form-check-input" type="checkbox" id="checkAll" />
          <label className="form-check-label" htmlFor="checkAll"></label>
        </div>,
        accessor: '#',
        width: '20px',
        filterable: true,
        Cell: (cellProps) => (
          <div className="form-check font-size-16" >
            <input className="form-check-input" type="checkbox" id="checkAll" />
            <label className="form-check-label" htmlFor="checkAll"></label>
          </div>
        )
      },
      {
        Header: "Plan ID",
        accessor: "id",
        width: "150px",
        style: {
          textAlign: "center",
          width: "10%",
          background: "#0000",
        },
        filterable: true,
        Cell: (cellProps) => {
          return <PlanId {...cellProps} />;
        },
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
        Cell: (cellProps) => {
          return <Name {...cellProps} />;
        },
      },
      {
        Header: "Price",
        accessor: "price",
        filterable: true,
        Cell: (cellProps) => {
          return <Price {...cellProps} />;
        },
      },
      {
        Header: "Duration",
        accessor: "duration",
        filterable: true,
        Cell: (cellProps) => {
          return <Duration {...cellProps} />;
        },
      },
      {
        Header: "Interval",
        accessor: "interval",
        filterable: true,
        Cell: (cellProps) => {
          return <Interval {...cellProps} />;
        },
      },
      {
        Header: "Display Interval",
        accessor: "display_interval",
        Cell: (cellProps) => {
          return <DisplayInterval {...cellProps} />;
        },
      },
    
      {
        Header: "Features",
        accessor: "features",
        Cell: (cellProps) => {
          return <Features {...cellProps} />;
        },
      },

      {
        Header: "Order",
        accessor: "order",
        Cell: (cellProps) => {
          return <Order {...cellProps} />;
        },
      },

      {
        Header: "Recommended",
        accessor: "recommended",
        Cell: (cellProps) => {
          return <Recommended {...cellProps} />;
        },
      },

      {
        Header: "Enabled",
        accessor: "enabled",
        Cell: (cellProps) => {
          return <Enabled {...cellProps} />;
        },
      },

      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: (cellProps) => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const orderData = cellProps.row.original;
                  handleOrderClick(orderData);
                }}
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const orderData = cellProps.row.original;
                  onClickDelete(orderData);
                }}
              >
                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      {/* <EcommerceordersModal isOpen={modal1} toggle={toggleViewModal} /> */}
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handledeletePlan}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Plans Management" breadcrumbItem="Plans" />
          <Row>
            {
              isLoading ? <Spinners setLoading={setLoading} />
                :
                <Col xs="12">
                  <Card>
                    <CardBody>
                      <TableContainer
                        columns={columns}
                        data={plans}
                        isGlobalFilter={true}
                        isAddOptions={true}
                        handleOrderClicks={handleOrderClicks}
                        customPageSize={10}
                        isPagination={true}
                        filterable={false}
                        iscustomPageSizeOptions={true}
                        tableClass="align-middle table-nowrap table-check"
                        theadClass="table-light"
                        pagination="pagination pagination-rounded justify-content-end mb-2"
                      />
                    </CardBody>
                  </Card>
                </Col>
            }
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Order" : "Add Order"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row>
                  <Col className="col-12">
                    <div className="mb-3">
                      <Label className="form-label">Order Id</Label>
                      <Input
                        name="orderId"
                        type="text"
                        placeholder="Insert Order Id"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderId || ""}
                        invalid={
                          validation.touched.orderId &&
                            validation.errors.orderId
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderId &&
                        validation.errors.orderId ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderId}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Billing Name</Label>
                      <Input
                        name="billingName"
                        type="text"
                        placeholder="Insert Billing Name"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.billingName || ""}
                        invalid={
                          validation.touched.billingName &&
                            validation.errors.billingName
                            ? true
                            : false
                        }
                      />
                      {validation.touched.billingName &&
                        validation.errors.billingName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.billingName}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Order Date</Label>
                      {/* <Input
                        name="orderdate"
                        type="date"
                        // value={orderList.orderdate || ""}
                        placeholder="Insert Order Date"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderdate || ""}
                        invalid={
                          validation.touched.orderdate &&
                            validation.errors.orderdate
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderdate &&
                        validation.errors.orderdate ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderdate}
                        </FormFeedback>
                      ) : null} */}
                      <Flatpickr
                        className="form-control d-block"
                        name="orderdate"
                        placeholder="Select time"
                        options={{
                          dateFormat: 'd M, Y',
                        }}
                        onChange={(date) => validation.setFieldValue("orderdate", moment(date[0]).format("DD MMMM, YYYY"))}
                        value={validation.values.orderdate}
                      />
                      {validation.touched.orderdate && validation.errors.orderdate ? (
                        <FormFeedback type="invalid" className="d-block">{validation.errors.orderdate}</FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Total</Label>
                      <Input
                        name="total"
                        placeholder="Insert Total Amount"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.total || ""}
                        invalid={
                          validation.touched.total && validation.errors.total
                            ? true
                            : false
                        }
                      />
                      {validation.touched.total && validation.errors.total ? (
                        <FormFeedback type="invalid">
                          {validation.errors.total}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Payment Status</Label>
                      <Input
                        name="paymentStatus"
                        type="select"
                        placeholder="Insert Payment Status"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Paid</option>
                        <option>Chargeback</option>
                        <option>Refund</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                        validation.errors.paymentStatus ? (
                        <FormFeedback type="invalid">
                          {validation.errors.paymentStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Payment Method</Label>
                      <Input
                        name="paymentMethod"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentMethod || ""}
                      >
                        <option>Mastercard</option>
                        <option>Visa</option>
                        <option>Paypal</option>
                        <option>COD</option>
                      </Input>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-success save-user"
                      >
                        Save
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
EcommerceOrder.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default EcommerceOrder;
