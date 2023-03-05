import GeneralSidebar from "../elements/sidebar/GeneralSidebar";

const GeneralLayout = ({ children }) => (
  <div className="layout-container">
    <GeneralSidebar />
    <div className="layout-page">
      {children}
    </div>
  </div>
)

export default GeneralLayout;