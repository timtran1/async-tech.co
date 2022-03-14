<template>
  <div class="timeline">
    <div class="container left">
      <!--      <div class="date">15 Dec</div>-->
      <!--      <i class="icon fa fa-home"></i>-->
      <i class='bx bxs-coffee-alt'></i>
      <div class="content">
        <h3>Complementary initial consultation</h3>
        <p>
          After one or two meetings to gather ballpark requirements and budget, a preliminary cost and timeline
          estimate is
          produced. We provide up to 2 hours of complimentary consultation per project.
        </p>
      </div>
    </div>

    <div class="container right">
      <!--      <div class="date">22 Oct</div>-->
      <i class='bx bxs-edit'></i>
      <div class="content">
        <h3>Requirements collection and documentation</h3>
        <p>
          We talk with stakeholders to drill down and collect more detailed requirements, and produce a statement of
          scope, along
          with any necessary cost and timeline adjustments.</p>
      </div>
    </div>

    <div class="container left">
      <!--      <div class="date">10 Jul</div>-->
      <i class='bx bxs-wrench'></i>
      <div class="content">
        <h3>Engineering</h3>
        <p>
          Our engineers use leading-edge technologies to create highly available and scalable software systems that
          solve
          your business needs.
        </p>
      </div>
    </div>

    <div class="container right">
      <!--      <div class="date">18 May</div>-->
      <i class='bx bx-check-double'></i>
      <div class="content">
        <h3>Delivery</h3>
        <p>
          Product is iteratively tested and delivered, generating a flexible, evolving, and business-driven solution.
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Process"
}
</script>

<style scoped>
* {
  text-align: left;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 50px 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: rgb(25, 91, 255);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid rgb(25, 91, 255);
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: rgb(25, 91, 255);
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: rgb(25, 91, 255);
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -75px;
}

.container.right .date {
  left: -75px;
}

.container .icon, .container i.bx {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  background: rgba(26, 92, 255, 0.15);
  border: 2px solid rgb(25, 91, 255);
  border-radius: 40px;
  text-align: center;
  font-size: 18px;
  color: rgb(25, 91, 255);
  z-index: 1;
}

.container.left .icon, .container.left i.bx {
  right: 56px;
}

.container.right .icon, .container.right i.bx {
  left: 56px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  background: rgba(26, 92, 255, 0.15);
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: rgb(25, 91, 255);
}

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after,
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent rgb(25, 91, 255) transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}

</style>