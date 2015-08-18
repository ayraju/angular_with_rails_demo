    class Api::V1::ProjectsController < Api::V1::BaseController
      def index
        headers['Access-Control-Allow-Origin'] = '*'
        @projects = Project.all
         render :json => {:records => @projects}
      end

      def create
      Project.create(project_params)
      render :nothing => true, :status => 200, :content_type => 'text/html'
      end

      private

      def project_params
        params.require(:project).permit(:title, :description)
      end
    end
