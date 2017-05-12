var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
   lambda_invoke: {
      default: {
         options: {
            file_name: 'RecreationTest.js'
         }
      }
   },
   lambda_deploy: {
      default: {
         function: 'RecreationTest',
         arn: 'arn:aws:lambda:us-west-2:045716464491:function:recreation_testnode',
         options: {
            region: 'us-west-2'
         }

      }
   },
   lambda_package: {
      default: {
   }
   }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])
