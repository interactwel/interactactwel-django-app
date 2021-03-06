from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import Subbasin, InteractwelUser, InteractwelRole, InteractwelAdaptationStory, \
InteractwelInstructionalVideo, InteractwelDocumentation, InteractwelGroup, \
InteractwelGroupRoleMapping, InteractwelGroupMembership, InteractwelEvent, \
InteractwelEventAttendance, InteractwelInvitation, InteractwelProject, InteractwelProjectUser, \
InteractwelPlan, InteractwelFeedback, InteractwelGoal, InteractwelActor, InteractwelAction, \
InteractwelQuestion, InteractwelProjectGoal, InteractwelProjectActor, InteractwelProjectAction, \
InteractwelProjectQuestion, InteractwelProjectPlan

class SubbasinSerializer(serializers.ModelSerializer):

    detail_json = serializers.JSONField()
    class Meta:
        model = Subbasin
        fields = ("id", "detail_json")

################# User Management ##############################################
################################################################################

class InteractwelUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelUser
        fields = '__all__'

class InteractwelRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelRole
        fields = '__all__'

class InteractwelGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelGroup
        fields = '__all__'

class InteractwelGroupRoleMappingSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelGroupRoleMapping
        fields = '__all__'

class InteractwelGroupMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelGroupMembership
        fields = '__all__'

################################## Events ######################################
################################################################################

class InteractwelEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelEvent
        fields = '__all__'

class InteractwelEventAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelEventAttendance
        fields = '__all__'

class InteractwelInvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelInvitation
        fields = '__all__'

################################################################################
################################################################################

class InteractwelInstructionalVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelInstructionalVideo
        fields = '__all__'

class InteractwelAdaptationStorySerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelAdaptationStory
        fields = '__all__'

class InteractwelDocumentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelDocumentation
        fields = '__all__'

########################### Project ############################################
################################################################################

class InteractwelProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProject
        fields = '__all__'

class InteractwelProjectUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProjectUser
        fields = '__all__'

class InteractwelPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelPlan
        fields = '__all__'

class InteractwelFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelFeedback
        fields = '__all__'

########################### Goals Actors Actions Questions #####################
################################################################################


class InteractwelGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelGoal
        fields = '__all__'

class InteractwelActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelActor
        fields = '__all__'

class InteractwelActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelAction
        fields = '__all__'

class InteractwelQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelQuestion
        fields = '__all__'

########################### Project mapping in Goals Actors Actions Questions ##
################################################################################

class InteractwelProjectGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProjectGoal
        fields = '__all__'

class InteractwelProjectActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProjectActor
        fields = '__all__'

class InteractwelProjectActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProjectAction
        fields = '__all__'

class InteractwelProjectQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProjectQuestion
        fields = '__all__'

class InteractwelProjectPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteractwelProjectPlan
        fields = '__all__'