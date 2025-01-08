package com.team4.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Admin {
	private String admin_id;
	private String admin_password;
	private String admin_nickname;
}
