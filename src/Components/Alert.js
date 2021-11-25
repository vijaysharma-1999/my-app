import React from 'react'

export default function Alert(props) {
    return (
       props.alert && <div class={`alert alert-${props.alert.type==='Success'?'success':'dark'}  py-1 rounded-pill alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
  {/* <button type="button" class="btn-close py-1 " data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
    )
}
