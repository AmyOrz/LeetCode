<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/webpage/include/taglib.jsp"%>
<html>
<head>
	<title>分区信息管理</title>
	<meta name="decorator" content="default"/>
	<script type="text/javascript">
		var validateForm;
		function doSubmit(){//回调函数，在编辑和保存动作时，供openDialog调用提交表单。
		  if(validateForm.form()){
			  $("#inputForm").submit();
			  return true;
		  }
	
		  return false;
		}
		$(document).ready(function() {
			validateForm = $("#inputForm").validate({
				submitHandler: function(form){
					loading('正在提交，请稍等...');
					form.submit();
				},
				errorContainer: "#messageBox",
				errorPlacement: function(error, element) {
					$("#messageBox").text("输入有误，请先更正。");
					if (element.is(":checkbox")||element.is(":radio")||element.parent().is(".input-append")){
						error.appendTo(element.parent().parent());
					} else {
						error.insertAfter(element);
					}
				}
			});
			
		});
	</script>
</head>
<body>
		<form:form id="inputForm" modelAttribute="numericalSlurmPartitions" action="${ctx}/slurm/numericalSlurmPartitions/save" method="post" class="form-horizontal">
		<form:hidden path="basePartitionsId"/>
		<sys:message content="${message}"/>	
		<table class="table table-bordered  table-condensed dataTables-example dataTable no-footer">
		   <tbody>
		   <tr>
					<td class="width-15 active"><label class="pull-right"><font color="red">*</font>分区名称：</label></td>
					<td class="width-35">
						<form:input path="numericalBasePartitions.partition" htmlEscape="false" maxlength="64" class="form-control required"/>
					</td>
					<td class="width-15 active"><label class="pull-right"><font color="red">*</font>分区状态：</label></td>
					<td class="width-35">
					<!--<form:select path="numericalBasePartitions.avail" class="form-control required">
							<form:option value="" label=""/>
							<form:options items="${fns:getDictList('avail')}" itemLabel="label" itemValue="value" htmlEscape="false"/>
						</form:select>
					-->
						<form:input path="numericalBasePartitions.avail" htmlEscape="false" maxlength="64" class="form-control required"/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right"><font color="red">*</font>时间限制：</label></td>
					<td class="width-35">
						<form:input path="numericalBasePartitions.timeLimit" htmlEscape="false" maxlength="64" class="form-control required"/>
					</td>
					<td class="width-15 active"><label class="pull-right"><font color="red">*</font>节点数：</label></td>
					<td class="width-35">
						<form:input path="numericalBasePartitions.nodes" htmlEscape="false" maxlength="64" class="form-control required"/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right"><font color="red">*</font>状态显示：</label></td>
					<td class="width-35">
						<form:input path="numericalBasePartitions.state" htmlEscape="false" maxlength="64" class="form-control required"/>
					</td>
					<td class="width-15 active"><label class="pull-right"><font color="red">*</font>节点列表：</label></td>
					<td class="width-35">
						<form:input path="numericalBasePartitions.nodeList" htmlEscape="false" maxlength="255" class="form-control required"/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">可以从哪些节点向分区中提交作业：</label></td>
					<td class="width-35">
						<form:input path="allocNodes" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">访问、提交作业的用户组：</label></td>
					<td class="width-35">
						<form:input path="allowGroups" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">系统默认分区：</label></td>
					<td class="width-35">
						<form:input path="defaults" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">分区中作业的默认运行时间：</label></td>
					<td class="width-35">
						<form:input path="defaultTime" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">禁止root 用户向分区中提交作业：</label></td>
					<td class="width-35">
						<form:input path="disableRootJobs" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">隐藏分区：</label></td>
					<td class="width-35">
						<form:input path="hiddens" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">此分区中的作业最多可分配的节点数目。默认无限制。：</label></td>
					<td class="width-35">
						<form:input path="maxNodes" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">分区中作业的最长运行时间：</label></td>
					<td class="width-35">
						<form:input path="maxTime" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">分区中作业最少分配的节点数，默认为1：</label></td>
					<td class="width-35">
						<form:input path="minNodes" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">优先级，默认为1：</label></td>
					<td class="width-35">
						<form:input path="priority" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">仅root 用户可向分区中提交作业。默认为NO：</label></td>
					<td class="width-35">
						<form:input path="rootOnly" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">提交到分区中的作业是否共享节点：</label></td>
					<td class="width-35">
						<form:input path="shared" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">CPU总数：</label></td>
					<td class="width-35">
						<form:input path="totalCpus" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">总节点数：</label></td>
					<td class="width-35">
						<form:input path="totalNodes" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
				</tr>
				<tr>
					<td class="width-15 active"><label class="pull-right">备选分区：</label></td>
					<td class="width-35">
						<form:input path="alternate" htmlEscape="false" maxlength="64" class="form-control "/>
					</td>
					<td class="width-15 active"><label class="pull-right">备注信息：</label></td>
					<td class="width-35">
						<form:textarea path="numericalBasePartitions.remarks" htmlEscape="false" rows="4" maxlength="255" class="form-control "/>
					</td>
				</tr>
		 	</tbody>
		</table>
	</form:form>
</body>
</html>