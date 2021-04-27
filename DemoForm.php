<!-- START:: INCLUDING THE HEADER -->
<?php include('layouts/wizard/wizardHeader.php')?>
<!-- END:: INCLUDING THE HEADER -->

<!-- START:: FORM WIZARD -->
<section class="signup-step-container">
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-10">
        <div class="wizard">
          <div class="wizard-inner">
            <div class="connecting-line"></div>
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true">
                  <span class="round-tab">1 </span> 
                </a>
              </li>

              <li role="presentation" class="disabled">
                <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false">
                  <span class="round-tab">2</span> 
                </a>
              </li>

              <li role="presentation" class="disabled">
                <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab">
                  <span class="round-tab">3</span> 
                </a>
              </li>
            </ul>
          </div>

          <form role="form" action="" class="login-box">
            <div class="tab-content" id="main_form">
              <!-- START:: STEP 1 -->
              <div class="tab-pane active" role="tabpanel" id="step1">
                <div class="header_wraper">
                  <h2 class="text-center"> Select The App </h2>
                </div>
                <div class="row justify-content-center">
                  <div class="col-6 col-md-3">
                    <div class="app_card">
                      <div class="img_wraper radio_img">
                        <img src="assets/media/icons/logo2.png" alt="">
                      </div>

                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="app" id="app_1">
                        <label class="form-check-label" for="app_1">
                          Cosmatics
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="col-6 col-md-3">
                    <div class="app_card">
                      <div class="img_wraper radio_img">
                        <img src="assets/media/icons/logo.png" alt="">
                      </div>

                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="app" id="app_2">
                        <label class="form-check-label" for="app_2">
                          U Care
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <ul class="list-inline pull-right">
                  <li>
                    <button type="button" class="default-btn next-step">Next</button>
                  </li>
                </ul>
              </div>
              <!-- END:: STEP 1 -->

              <!-- START:: STEP 2 -->
              <div class="tab-pane" role="tabpanel" id="step2">
                <div class="header_wraper">
                  <h2 class="text-center"> Basic Information </h2>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label> Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control is-invalid" aria-describedby="invalid_field" required>
                      <div id="invalid_field" class="invalid-feedback">
                        Name can't Be Empty.
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Phone Number <span class="text-danger">*</span></label> 
                      <input class="form-control" type="text" name="number" required> 
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label> Email <span class="text-danger">*</span></label> 
                      <input class="form-control" type="email" name="email" required> 
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label> Usage <span class="text-danger">*</span></label> 
                      <select name="usage" class="form-control" id="usage" required>
                        <option>Select Yor Usage</option>
                        <option value="0">Center</option>
                        <option value="1">Clinic</option>
                        <option value="2">Personal Usage</option>
                      </select>
                    </div>
                  </div>
                </div>

                <ul class="list-inline pull-right mt-4">
                  <li class="mx-2">
                    <button type="button" class="default-btn prev-step">Back</button>
                  </li>
                  <li class="mx-2">
                    <button type="submit" class="default-btn next-step">Send</button>
                  </li>
                </ul>
              </div>
              <!-- START:: STEP 2 -->

              <!-- START:: STEP 3 -->
              <div class="tab-pane" role="tabpanel" id="step3">
                <div class="row justify-content-center">
                  <div class="col-8">
                    <div class="alert_wraper">
                      <div class="alert alert-success text-center" role="alert">
                        <img src="assets/media/icons/check.png">
                        <p> Your Demo Link Created Successfuly </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 mt-4">
                    <div class="btn_wraper">
                      <a href="#"> View Demo </a>
                    </div>
                  </div>

                </div>
              </div>
              <!-- START:: STEP 3 -->

              <div class="clearfix"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END:: FORM WIZARD -->

<!-- START:: INCLUDING THE FOOTER -->
<?php include('layouts/TheFooter.php')?>
<!-- END:: INCLUDING THE FOOTER -->