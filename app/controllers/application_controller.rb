class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    before_action :authorize
  
    private
  
    def authorize
  
      return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
