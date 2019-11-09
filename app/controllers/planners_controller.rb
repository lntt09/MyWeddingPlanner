# class PlannersController < ApplicationController
#   before_action :set_planner, only: [:show, :update, :destroy]

#   # GET /planners
#   def index
#     @planners = Planner.all

#     render json: @planners
#   end

#   # GET /planners/1
#   def show
#     render json: @planner
#   end

#   # POST /planners
#   def create
#     @planner = Planner.new(planner_params)

#     if @planner.save
#       render json: @planner, status: :created, location: @planner
#     else
#       render json: @planner.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /planners/1
#   def update
#     if @planner.update(planner_params)
#       render json: @planner
#     else
#       render json: @planner.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /planners/1
#   def destroy
#     @planner.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_planner
#       @planner = Planner.find(params[:id])
#     end

#     # Only allow a trusted parameter "white list" through.
#     def planner_params
#       params.require(:planner).permit(:first_name, :last_name, :wedding_date)
#     end
# end

class PlannersController < ApplicationController
  def index
      #render json: "Testing Route for Planner"
      planners = Planner.all
      render json: {status: 200, planners: planners}
  end

  def show
      planner = Planner.find(params[:id])
      render json: {status: 200, planner: planner}
  end

  def create
      planner = Planner.new(planner_params)
      if planner.save
          render(status: 201, json: {planner: planner})
      else
          render(status: 422, json: {planner: planner})
      end
  end

  def update
      planner = Planner.find(params[:id])
      planner.update(planner_params)
      render(json: {planner: planner})
  end   
  
  def destroy
      planner = Planner.destroy(params[:id])
      render(status: 204)
  end

  private

  def planner_params
      params.required(:planner).permit(:first_name, :last_name, :wedding_date)
  end
end
