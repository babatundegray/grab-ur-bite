<template>
  <div class="_container">
    <div class="container">
      <div class="wrapper">
        <div class="row header pt-3">
          <div class="">Grab Ur Bite</div>
          <div>
            <button class="_btn">LOG IN</button>
            <button class="_btn">SIGN UP</button>
          </div>
        </div>
      </div>

      <div class="para-text">
        <span>Grab Your Bite Have</span>
        <span>It Delivered To Your Doorsteps</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          body: true
        },
        {
          src:
            'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
          body: true
        },
        {
          src:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
          body: true
        }
      ]
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
._container {
  background: gold;
  height: 80vh;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.header {
  height: 60px;
  padding: 6px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.wrapper {
  height: 100%;
  background: gold;
}

._btn {
  padding-left: 16px;
  padding-right: 16px;
}

.header div ._btn {
  font-size: 12px;
  height: 32px;
  font-weight: 600;
  letter-spacing: 0.72px;
  line-height: normal;
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
}
</style>
